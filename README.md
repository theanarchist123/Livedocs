# LiveDocs - Real-time Collaborative Document Editor 🚀

Welcome to LiveDocs, a cutting-edge collaborative document editing platform that brings together the power of real-time collaboration and modern web technologies. Inspired by platforms like Google Docs and Notion, LiveDocs takes document collaboration to the next level by offering a seamless, intuitive, and feature-rich environment where teams can create, edit, and share documents in real-time. Whether you're brainstorming with colleagues, writing documentation with your team, or working on a shared project, LiveDocs makes collaboration effortless and enjoyable.

![LiveDocs Preview](public/assets/icons/logo.svg)

## ✨ Features
### Real-time Collaboration
- 🤝 Multiple users can edit documents simultaneously
- 👥 See who's currently viewing or editing the document
- 💬 Real-time comments and discussions within documents
- 🎨 User cursors with unique colors for each collaborator

### Rich Text Editing
- 📝 Support for headings, bold, italic, and other text formatting
- ⚡ Fast and responsive editor powered by Lexical
- 🎯 Floating toolbar for quick formatting
- 📏 Multiple text alignment options

### User Management
- 🔐 Secure authentication with Clerk
- 👤 User profiles with avatars
- 📧 Invite collaborators via email
- 🎚️ Granular access controls (Viewer/Editor roles)

### Modern UI/UX
- 🌓 Dark mode optimized interface
- 💫 Smooth animations and transitions
- 📱 Responsive design for all devices
- 🎯 Intuitive and clean user interface

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Styling and UI components
- **Lexical** - Rich text editor framework
- **Liveblocks** - Real-time collaboration
- **Radix UI** - Accessible component primitives
- **Clerk** - Authentication and user management

### Backend
- **Next.js API Routes** - Backend API
- **Liveblocks Storage** - Document storage and sync
- **Clerk Backend SDK** - User management

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/live_docs.git
cd live_docs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Fill in the following environment variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔜 Future Scope

### Enhanced Collaboration
- 📊 Real-time charts and diagrams
- 📎 File attachments and media embedding
- 🎥 Video conferencing integration
- 📱 Mobile apps for iOS and Android

### Advanced Features
- 📑 Document templates
- 📈 Version history and rollback
- 🔍 Advanced search capabilities
- 🔄 Offline support with sync
- 📤 Export to multiple formats

### AI Integration
- 💡 AI-powered writing suggestions
- 🎯 Smart formatting recommendations
- 🔍 Content analysis and insights
- 🗣️ Voice-to-text input

### Enterprise Features
- 👥 Team workspaces
- 📊 Analytics dashboard
- 🔐 Advanced security features
- 🤝 Third-party integrations

## 🤝 Contributing

We welcome contributions to LiveDocs! Please feel free to submit issues and pull requests.

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Liveblocks](https://liveblocks.io) for real-time collaboration
- [Lexical](https://lexical.dev) for the powerful editor framework
- [Clerk](https://clerk.dev) for authentication
- All our contributors and supporters

---

Built with ❤️ using Next.js, Lexical, and Liveblocks
