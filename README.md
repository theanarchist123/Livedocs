# LiveDocs - Real-time Collaborative Document Editor 🚀

<div align="center">
  <img src="public/assets/icons/logo.svg" alt="LiveDocs Logo" width="100" height="100">
  
  **A cutting-edge collaborative document editing platform built with Next.js, Lexical, and Liveblocks**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Liveblocks](https://img.shields.io/badge/Liveblocks-2.24-FF6B6B?style=for-the-badge)](https://liveblocks.io/)
</div>

---

Welcome to **LiveDocs**, a powerful collaborative document editing platform that brings together the best of real-time collaboration and modern web technologies. Inspired by platforms like Google Docs and Notion, LiveDocs takes document collaboration to the next level by offering a seamless, intuitive, and feature-rich environment where teams can create, edit, and share documents in real-time.

Whether you're brainstorming with colleagues, writing documentation with your team, or working on a shared project, LiveDocs makes collaboration effortless and enjoyable with its modern interface and powerful features.

## 📸 Project Glimpses

<div align="center">

### 🏠 Dashboard & Authentication
<img src="Screenshot 2025-07-18 115938.png" alt="Authentication Screen" width="45%">
<img src="Screenshot 2025-07-18 120117.png" alt="Dashboard" width="45%">

*Secure authentication with Clerk and clean dashboard interface*

### ✍️ Document Editor & Real-time Collaboration  
<img src="Screenshot 2025-07-18 120847.png" alt="Document Editor" width="45%">
<img src="Screenshot 2025-07-18 121042.png" alt="Real-time Collaboration" width="45%">

*Rich text editor with live collaboration features and user presence*

### 💬 Comments & Share Features
<img src="Screenshot 2025-07-18 122159.png" alt="Comments Feature" width="45%">
<img src="Screenshot 2025-07-18 122418.png" alt="Share Modal" width="45%">

*Contextual comments and seamless document sharing capabilities*

### 👥 User Management & Collaboration Tools
<img src="Screenshot 2025-07-18 122603.png" alt="User Management" width="45%">
<img src="Screenshot 2025-07-18 122653.png" alt="Collaboration Tools" width="45%">

*Advanced user management and collaboration features*

</div>

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 🤝 Real-time Collaboration
- ✅ **Multi-user editing** - Multiple users can edit simultaneously
- ✅ **Live presence** - See who's currently viewing/editing
- ✅ **Real-time comments** - Contextual discussions within documents
- ✅ **User cursors** - Unique colored cursors for each collaborator
- ✅ **Instant sync** - Changes appear instantly across all clients

</td>
<td width="50%">

### 📝 Rich Text Editing
- ✅ **Advanced formatting** - Headings, bold, italic, strikethrough
- ✅ **Lexical-powered** - Fast and responsive editor framework
- ✅ **Floating toolbar** - Quick formatting at your fingertips
- ✅ **Text alignment** - Left, center, right, and justify
- ✅ **Undo/Redo** - Full history with keyboard shortcuts

</td>
</tr>
<tr>
<td width="50%">

### 👤 User Management
- ✅ **Secure authentication** - Powered by Clerk
- ✅ **User profiles** - Customizable avatars and information
- ✅ **Email invitations** - Seamless collaborator invitations
- ✅ **Access controls** - Granular permissions (Viewer/Editor)
- ✅ **User directory** - Browse and invite team members

</td>
<td width="50%">

### 🎨 Modern UI/UX
- ✅ **Dark mode optimized** - Beautiful dark theme
- ✅ **Smooth animations** - Polished transitions
- ✅ **Responsive design** - Works on all devices
- ✅ **Clean interface** - Minimalist design
- ✅ **Accessibility** - Built with best practices

</td>
</tr>
</table>

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend Framework** | ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript) |
| **Styling & UI** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css) ![Radix UI](https://img.shields.io/badge/Radix_UI-Components-8B5CF6?style=flat-square) |
| **Real-time Features** | ![Liveblocks](https://img.shields.io/badge/Liveblocks-2.24-FF6B6B?style=flat-square) ![Lexical](https://img.shields.io/badge/Lexical-Editor-4285F4?style=flat-square) |
| **Authentication** | ![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=flat-square) |
| **Development** | ![ESLint](https://img.shields.io/badge/ESLint-Linting-4B32C3?style=flat-square&logo=eslint) ![PostCSS](https://img.shields.io/badge/PostCSS-Processing-DD3A0A?style=flat-square&logo=postcss) |

</div>

### 🏗️ Architecture Overview
- **Frontend**: Next.js 15 with TypeScript and App Router
- **Styling**: Tailwind CSS with Radix UI component primitives
- **Editor**: Lexical framework for rich text editing
- **Real-time**: Liveblocks for collaboration and document sync
- **Auth**: Clerk for secure user authentication and management
- **API**: Next.js API Routes for backend functionality

## 🚀 Getting Started

### 📋 Prerequisites
- **Node.js** 18+ installed
- **npm** or **yarn** package manager
- **Git** for version control
- **Clerk** account for authentication
- **Liveblocks** account for real-time features

### 🔧 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/live_docs.git
cd live_docs
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install

# If you encounter dependency conflicts during deployment, use:
npm install --legacy-peer-deps
```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Liveblocks Collaboration
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key

# Optional: Custom domain
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to see LiveDocs in action!

### 🚨 Deployment Notes
If you encounter dependency conflicts during Vercel deployment, add this to your `package.json`:
```json
{
  "scripts": {
    "build": "npm install --legacy-peer-deps && next build"
  }
}
```

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

We welcome contributions to LiveDocs! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### 🐛 Issues
Found a bug? Have a feature request? Please open an issue on GitHub!

## � License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Special thanks to the amazing teams and technologies that made LiveDocs possible:

- 🚀 [**Liveblocks**](https://liveblocks.io) - For providing the real-time collaboration infrastructure
- 📝 [**Lexical**](https://lexical.dev) - For the powerful and extensible editor framework  
- 🔐 [**Clerk**](https://clerk.dev) - For seamless authentication and user management
- ⚡ [**Next.js**](https://nextjs.org) - For the amazing React framework
- 🎨 [**Tailwind CSS**](https://tailwindcss.com) - For beautiful and utility-first styling
- 🧩 [**Radix UI**](https://www.radix-ui.com) - For accessible component primitives

### 👨‍💻 Developer
Built with ❤️ by **[Your Name]** using cutting-edge web technologies.

---

<div align="center">
  
**⭐ Star this repo if you find it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/live_docs?style=social)](https://github.com/yourusername/live_docs/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/live_docs?style=social)](https://github.com/yourusername/live_docs/network/members)

**Made with Next.js, Lexical, and Liveblocks**

</div>
