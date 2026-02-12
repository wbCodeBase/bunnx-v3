// // components/admin/AdminSidebar.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Users,
  Newspaper,
  // Calendar,
  // Building2,
  // Settings,
  // MessageSquare,
  // Shield,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface SidebarItem {
  name: string;
  href: string;
  icon: any;
  feature?: string; // Required permission feature
  minRole?: string; // Minimum role required
  badge?: string | number;
}

interface SidebarSection {
  title?: string;
  items: SidebarItem[];
}

const sidebarSections: SidebarSection[] = [
  {
    title: 'Overview',
    items: [
      {
        name: 'Dashboard',
        href: '/bunnx-admin',
        icon: LayoutDashboard,
      },
      {
        name: 'Leads',
        href: '/bunnx-admin/query',
        icon: BarChart3,
        feature: 'view_all_analytics',
        minRole: 'admin',
      },

    ],
  },
  {
    title: 'Content Management',
    items: [
      {
        name: 'Blogs',
        href: '/bunnx-admin/blogs',
        icon: FileText,
        feature: 'manage_blogs',
      },
      {
        name: 'Categories',
        href: '/bunnx-admin/categories',
        icon: Newspaper,
        feature: 'manage_news',
      },
      {
        name: 'Manage Slugs',
        href: '/bunnx-admin/manage-slug',
        icon: Newspaper,
        feature: 'manage_news',
      },
      // {
      //   name: 'Events',
      //   href: '/admin-dashboard/events',
      //   icon: Calendar,
      //   feature: 'manage_events',
      // },
    ],
  },
  {
    title: 'User Management',
    items: [
      {
        name: 'Users',
        href: '/bunnx-admin/users',
        icon: Users,
        feature: 'view_all_analytics',
        minRole: 'admin',
      }, ,
      // {
      //   name: 'Businesses',
      //   href: '/admin-dashboard/businesses',
      //   icon: Building2,
      //   feature: 'manage_businesses',
      //   minRole: 'admin',
      // },
      // {
      //   name: 'Moderation',
      //   href: '/admin-dashboard/moderation',
      //   icon: Shield,
      //   feature: 'moderate_content',
      // },
    ],
  },
  // {
  //   title: 'Communication',
  //   items: [
  //     {
  //       name: 'Messages',
  //       href: '/admin-dashboard/messages',
  //       icon: MessageSquare,
  //       badge: 5,
  //     },
  //   ],
  // },
  // {
  //   title: 'System',
  //   items: [
  //     {
  //       name: 'Settings',
  //       href: '/admin-dashboard/settings',
  //       icon: Settings,
  //       feature: 'system_settings',
  //       minRole: 'admin',
  //     },
  //   ],
  // },
];

export default function AdminSidebar({ role = 'admin' }: { role: string }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'Overview',
    'Content Management',
  ]);



  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  const user = useSession().data?.user;


  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-10 p-2 bg-white rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 bg-gray-900 text-white
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col
        `}
      >



        {/* User Info */}
        {user &&
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://github.com/shadcn.png"
                  alt={user?.name || 'User'}
                  width={40}
                  height={40}
                  className="rounded-full"
                />

              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{user?.name}</p>
                <p className="text-xs text-gray-400 truncate capitalize">{role}</p>
              </div>
            </div>
          </div>
        }

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {sidebarSections.map((section) => (
            <div key={section.title || 'default'} className="mb-6">
              {section.title && (
                <button
                  onClick={() => toggleSection(section.title!)}
                  className="flex items-center justify-between w-full px-2 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-white transition"
                >
                  <span>{section.title}</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${expandedSections.includes(section.title!) ? 'rotate-180' : ''
                      }`}
                  />
                </button>
              )}

              <div
                className={`space-y-1 ${section.title && !expandedSections.includes(section.title) ? 'hidden' : ''
                  }`}
              >
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        flex items-center gap-3 px-3 py-2.5 rounded-lg
                        transition-all duration-200
                        ${isActive
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }
                      `}
                    >
                      <Icon size={20} />
                      <span className="flex-1 font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 text-xs bg-red-500 text-white rounded-full font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>



        {/* Sign Out */}
        <div className="px-4 p-2 border-t border-gray-800">
          <button
            onClick={() => {
              handleSignOut();
            }}
            className="flex items-center cursor-pointer gap-3 px-3 py-2.5 w-full rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200"
          >
            <LogOut size={20} />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
}









