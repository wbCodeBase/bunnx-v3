// components/blog/BlogEditor.tsx
'use client';

import { useEditor, EditorContent, Extension } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import LinkExtension from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { TextStyle } from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { useCallback, useState, useEffect } from 'react';
import {
  Bold, Italic, Strikethrough, Code, Underline as UnderlineIcon,
  List, ListOrdered, Heading1, Heading2, Heading3,
  Quote, Minus, Image as ImageIcon, Link as LinkIcon,
  Undo, Redo, Loader2, X, RemoveFormatting, Type,
} from 'lucide-react';
import { toast } from 'sonner';

// ─────────────────────────────────────────────────────────────
// Custom FontSize Extension
// @tiptap/extension-text-style must be loaded for this to work
// ─────────────────────────────────────────────────────────────
const FontSize = Extension.create({
  name: 'fontSize',
  addOptions() {
    return { types: ['textStyle'] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: element => element.style.fontSize?.replace('px', '') || null,
            renderHTML: attributes => {
              if (!attributes.fontSize) return {};
              return { style: `font-size: ${attributes.fontSize}px` };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontSize:
        (fontSize: string) =>
        ({ chain }: any) => {
          return chain().setMark('textStyle', { fontSize }).run();
        },
      unsetFontSize:
        () =>
        ({ chain }: any) => {
          return chain().setMark('textStyle', { fontSize: null }).removeEmptyTextStyle().run();
        },
    } as any;
  },
});

// ─────────────────────────────────────────────────────────────
// Font sizes available in toolbar
// ─────────────────────────────────────────────────────────────
const FONT_SIZES = [
  { label: 'Small', value: '14' },
  { label: 'Normal', value: '16' },
  { label: 'Medium', value: '18' },
  { label: 'Large', value: '20' },
  { label: 'XL', value: '24' },
  { label: 'XXL', value: '30' },
  { label: 'Huge', value: '36' },
];

interface BlogEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function BlogEditor({ content, onChange }: BlogEditorProps) {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [selectedFontSize, setSelectedFontSize] = useState('16');

  useEffect(() => { setIsMounted(true); }, []);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        bulletList: { keepMarks: true, keepAttributes: false },
        orderedList: { keepMarks: true, keepAttributes: false },
        listItem: {},
        blockquote: {},
        code: {},
        codeBlock: {},
        horizontalRule: {},
        bold: {},
        italic: {},
        strike: {},
        hardBreak: {},
        // Disable history if needed, keep default
      }),
      TextStyle,       // ← required for FontSize to work
      FontSize,        // ← custom font size extension
      Underline,       // ← underline support
      ImageExtension.configure({
        inline: false,
        allowBase64: false,
        HTMLAttributes: {
          class: 'editor-image',
        },
      }),
      LinkExtension.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: 'editor-link',
          rel: 'noopener noreferrer',
        },
      }),
      Placeholder.configure({
        placeholder: 'Start writing your story here...',
      }),
    ],
    content,
    editorProps: {
      attributes: {
        // ✅ ProseMirror class — CSS targets this
        class: 'ProseMirror-editor focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Sync content when editing existing blog (only on mount)
  useEffect(() => {
    if (editor && content) {
      const currentHTML = editor.getHTML();
      const isEmpty = currentHTML === '<p></p>' || currentHTML === '';
      if (isEmpty && content && content !== '<p></p>') {
        editor.commands.setContent(content);
      }
    }
  }, [editor]);

  // ── Handlers ─────────────────────────────────────────────

  const handleImageUpload = useCallback(async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/jpeg,image/jpg,image/png,image/webp,image/gif';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      if (file.size > 3 * 1024 * 1024) { toast.error('Max 3MB'); return; }
      setUploadingImage(true);
      const tid = toast.loading('Uploading...');
      try {
        const fd = new FormData();
        fd.append('file', file);
        const res = await fetch('/api/blogs/upload-inline', { method: 'POST', body: fd });
        const result = await res.json();
        if (result.success) {
          editor?.chain().focus().setImage({ src: result.data.url, alt: file.name }).run();
          toast.success('Image inserted!', { id: tid });
        } else {
          toast.error(result.error || 'Failed', { id: tid });
        }
      } catch { toast.error('Upload failed', { id: tid }); }
      finally { setUploadingImage(false); }
    };
    input.click();
  }, [editor]);

  const handleImageFromUrl = useCallback(() => {
    if (!imageUrl.trim()) return;
    editor?.chain().focus().setImage({ src: imageUrl.trim(), alt: 'image' }).run();
    setImageUrl('');
    setShowImageModal(false);
  }, [editor, imageUrl]);

  const handleSetLink = useCallback(() => {
    const prev = editor?.getAttributes('link').href || '';
    const url = window.prompt('Enter URL:', prev);
    if (url === null) return;
    if (!url) { editor?.chain().focus().extendMarkRange('link').unsetLink().run(); return; }
    editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const handleFontSize = (size: string) => {
    setSelectedFontSize(size);
    if (size === '16') {
      (editor?.chain().focus() as any).unsetFontSize().run();
    } else {
      (editor?.chain().focus() as any).setFontSize(size).run();
    }
  };

  // ── Loading ────────────────────────────────────────────────

  if (!isMounted) {
    return (
      <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
        <div className="h-12 bg-gray-50 border-b border-gray-200" />
        <div className="min-h-[400px] flex items-center justify-center">
          <p className="text-sm text-gray-400">Loading editor...</p>
        </div>
      </div>
    );
  }

  if (!editor) return null;

  // ── Toolbar button ─────────────────────────────────────────
  const Btn = ({
    onClick, active = false, disabled = false, title, children,
  }: {
    onClick: () => void; active?: boolean; disabled?: boolean;
    title: string; children: React.ReactNode;
  }) => (
    <button
      type="button" onClick={onClick} disabled={disabled} title={title}
      className={[
        'p-1.5 rounded-md transition-all flex items-center justify-center',
        active ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900',
        disabled ? 'opacity-25 cursor-not-allowed pointer-events-none' : '',
      ].join(' ')}
    >
      {children}
    </button>
  );

  const Sep = () => <div className="w-px h-5 bg-gray-300 mx-0.5 self-center flex-shrink-0" />;

  return (
    <>
      {/* ─── Scoped CSS ─────────────────────────────────────── */}
      <style>{`
        /* ── LIST FIX: most important part ── */
        .ProseMirror-editor ul,
        .ProseMirror-editor ol {
          padding-left: 1.75rem !important;
          margin: 0.75rem 0 !important;
        }
        .ProseMirror-editor ul {
          list-style-type: disc !important;
        }
        .ProseMirror-editor ul ul {
          list-style-type: circle !important;
        }
        .ProseMirror-editor ul ul ul {
          list-style-type: square !important;
        }
        .ProseMirror-editor ol {
          list-style-type: decimal !important;
        }
        .ProseMirror-editor ol ol {
          list-style-type: lower-alpha !important;
        }
        .ProseMirror-editor li {
          display: list-item !important;
          margin: 0.3rem 0 !important;
          line-height: 1.7 !important;
        }
        .ProseMirror-editor li > p {
          margin: 0 !important;
          display: inline !important;
        }
        /* ── Headings ── */
        .ProseMirror-editor h1 {
          font-size: 2rem; font-weight: 700;
          margin: 1.75rem 0 0.75rem;
          line-height: 1.2; color: #111827;
        }
        .ProseMirror-editor h2 {
          font-size: 1.5rem; font-weight: 700;
          margin: 1.5rem 0 0.6rem;
          line-height: 1.3; color: #111827;
        }
        .ProseMirror-editor h3 {
          font-size: 1.25rem; font-weight: 600;
          margin: 1.25rem 0 0.5rem;
          line-height: 1.4; color: #111827;
        }
        /* ── Paragraph ── */
        .ProseMirror-editor p {
          margin: 0.6rem 0; line-height: 1.8;
          color: #374151; font-size: 1rem;
        }
        /* ── Blockquote ── */
        .ProseMirror-editor blockquote {
          border-left: 4px solid #D97706;
          padding: 0.75rem 1.25rem;
          margin: 1.25rem 0;
          background: #FFFBEB;
          border-radius: 0 0.5rem 0.5rem 0;
          color: #6B7280; font-style: italic;
        }
        .ProseMirror-editor blockquote p { margin: 0; }
        /* ── Inline Code ── */
        .ProseMirror-editor code {
          background: #F3F4F6;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          font-size: 0.875em;
          font-family: 'Fira Code', monospace;
          color: #DC2626;
        }
        /* ── Code Block ── */
        .ProseMirror-editor pre {
          background: #1F2937; color: #E5E7EB;
          padding: 1.25rem 1.5rem; border-radius: 0.75rem;
          overflow-x: auto; margin: 1.25rem 0;
        }
        .ProseMirror-editor pre code {
          background: none; color: inherit;
          padding: 0; font-size: 0.875rem;
        }
        /* ── HR ── */
        .ProseMirror-editor hr {
          border: none; border-top: 2px solid #E5E7EB;
          margin: 2rem 0;
        }
        /* ── Link ── */
        .editor-link {
          color: #2563EB; text-decoration: underline;
          text-underline-offset: 2px; cursor: pointer;
        }
        /* ── Image ── */
        .editor-image {
          max-width: 100%; border-radius: 0.75rem;
          margin: 1.5rem auto; display: block;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        /* ── Placeholder ── */
        .ProseMirror-editor p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left; color: #9CA3AF;
          pointer-events: none; height: 0;
        }
        /* ── Text Selection ── */
        .ProseMirror-editor ::selection {
          background: rgba(59, 130, 246, 0.2);
        }
        /* ── Focus ── */
        .ProseMirror-editor:focus { outline: none; }
        /* ── Strike / Underline ── */
        .ProseMirror-editor s { color: #9CA3AF; }
        .ProseMirror-editor u { text-underline-offset: 3px; }
      `}</style>

      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">

        {/* ── TOOLBAR ────────────────────────────────────────── */}
        <div className="bg-gray-50 border-b border-gray-200 p-2 flex flex-wrap items-center gap-0.5">

          {/* Font Size Selector */}
          <div className="flex items-center gap-1 mr-1">
            <Type size={14} className="text-gray-400 flex-shrink-0" />
            <select
              value={selectedFontSize}
              onChange={e => handleFontSize(e.target.value)}
              className="text-xs border border-gray-200 rounded-md px-1.5 py-1 bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
              title="Font Size"
            >
              {FONT_SIZES.map(({ label, value }) => (
                <option key={value} value={value}>{label} ({value}px)</option>
              ))}
            </select>
          </div>

          <Sep />

          {/* Headings */}
          <Btn onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            active={editor.isActive('heading', { level: 1 })} title="Heading 1">
            <Heading1 size={15} />
          </Btn>
          <Btn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            active={editor.isActive('heading', { level: 2 })} title="Heading 2">
            <Heading2 size={15} />
          </Btn>
          <Btn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            active={editor.isActive('heading', { level: 3 })} title="Heading 3">
            <Heading3 size={15} />
          </Btn>

          <Sep />

          {/* Text formatting */}
          <Btn onClick={() => editor.chain().focus().toggleBold().run()}
            active={editor.isActive('bold')} title="Bold (Ctrl+B)">
            <Bold size={15} />
          </Btn>
          <Btn onClick={() => editor.chain().focus().toggleItalic().run()}
            active={editor.isActive('italic')} title="Italic (Ctrl+I)">
            <Italic size={15} />
          </Btn>
          <Btn onClick={() => editor.chain().focus().toggleUnderline().run()}
            active={editor.isActive('underline')} title="Underline (Ctrl+U)">
            <UnderlineIcon size={15} />
          </Btn>
          <Btn onClick={() => editor.chain().focus().toggleStrike().run()}
            active={editor.isActive('strike')} title="Strikethrough">
            <Strikethrough size={15} />
          </Btn>
          <Btn onClick={() => editor.chain().focus().toggleCode().run()}
            active={editor.isActive('code')} title="Inline Code">
            <Code size={15} />
          </Btn>

          <Sep />

          {/* ✅ Lists — these MUST call toggleBulletList / toggleOrderedList */}
          <Btn
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={editor.isActive('bulletList')}
            title="Bullet List"
          >
            <List size={15} />
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={editor.isActive('orderedList')}
            title="Numbered List"
          >
            <ListOrdered size={15} />
          </Btn>

          <Sep />

          {/* Blocks */}
          <Btn onClick={() => editor.chain().focus().toggleBlockquote().run()}
            active={editor.isActive('blockquote')} title="Blockquote">
            <Quote size={15} />
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            active={editor.isActive('codeBlock')} title="Code Block"
          >
            <span className="text-xs font-mono font-bold">{'<>'}</span>
          </Btn>
          <Btn onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Divider">
            <Minus size={15} />
          </Btn>

          <Sep />

          {/* Link */}
          <Btn onClick={handleSetLink} active={editor.isActive('link')} title="Add Link">
            <LinkIcon size={15} />
          </Btn>

          {/* Images */}
          <Btn onClick={handleImageUpload} disabled={uploadingImage} title="Upload Image">
            {uploadingImage
              ? <Loader2 size={15} className="animate-spin" />
              : <ImageIcon size={15} />
            }
          </Btn>
          <Btn onClick={() => setShowImageModal(true)} title="Image from URL">
            <span className="text-[10px] font-bold leading-none">IMG<br/>URL</span>
          </Btn>

          <Sep />

          {/* Clear + History */}
          <Btn
            onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
            title="Clear Formatting"
          >
            <RemoveFormatting size={15} />
          </Btn>
          <Btn onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()} title="Undo">
            <Undo size={15} />
          </Btn>
          <Btn onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()} title="Redo">
            <Redo size={15} />
          </Btn>
        </div>

        {/* ── EDITOR AREA ──────────────────────────────────────── */}
        <div className="min-h-[420px] px-6 py-4 cursor-text"
          onClick={() => editor.chain().focus().run()}>
          <EditorContent editor={editor} />
        </div>

        {/* ── FOOTER ───────────────────────────────────────────── */}
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            Select text to format • Tab to indent lists
          </p>
          <p className="text-xs text-gray-400">
            {editor.getText().length} chars
          </p>
        </div>
      </div>

      {/* ── Image URL Modal ───────────────────────────────────── */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-gray-900">Insert Image URL</h3>
              <button type="button" onClick={() => setShowImageModal(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition">
                <X size={18} className="text-gray-500" />
              </button>
            </div>
            <input
              type="url" value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleImageFromUrl()}
              placeholder="https://example.com/image.jpg"
              autoFocus
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <div className="flex gap-3">
              <button type="button"
                onClick={() => { setShowImageModal(false); setImageUrl(''); }}
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
                Cancel
              </button>
              <button type="button" onClick={handleImageFromUrl}
                disabled={!imageUrl.trim()}
                className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 disabled:opacity-40 transition">
                Insert
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}











