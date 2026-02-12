// components/FontSizeToolbar.jsx
const FONT_SIZES = ['12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px', '48px']

export default function FontSizeToolbar({ editor }) {
  if (!editor) return null

  const handleFontSizeChange = (e) => {
    const size = e.target.value
    if (size === 'default') {
      editor.chain().focus().unsetFontSize().run()
    } else {
      editor.chain().focus().setFontSize(size).run()
    }
  }

  return (
    <div className="toolbar">
      {/* Your existing bold, italic etc. buttons */}

      {/* Font Size Dropdown */}
      <select
        onChange={handleFontSizeChange}
        defaultValue="default"
        className="font-size-select"
      >
        <option value="default">Font Size</option>
        {FONT_SIZES.map(size => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>
    </div>
  )
}