"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bell, ChevronLeft, ChevronRight, HelpCircle, LogOut, Maximize2, Menu, Minimize2, Search, Send, Settings, User, X } from 'lucide-react'
import { useState } from 'react'

const channels = [
  { name: "Ninja", game: "Fortnite", viewers: "50K" },
  { name: "Pokimane", game: "Just Chatting", viewers: "30K" },
  { name: "Shroud", game: "Valorant", viewers: "45K" },
  { name: "DrLupo", game: "Escape from Tarkov", viewers: "20K" },
  { name: "TimTheTatman", game: "Call of Duty: Warzone", viewers: "35K" },
]

const featuredStreams = [
  { title: "VALORANT Championship Finals!", streamer: "Riot Games", game: "VALORANT", viewers: "200K" },
  { title: "Speedrunning Mario 64!", streamer: "SpeedRunner123", game: "Super Mario 64", viewers: "15K" },
  { title: "Chill Minecraft Building Stream", streamer: "BuildMaster", game: "Minecraft", viewers: "25K" },
  { title: "League of Legends Ranked Grind", streamer: "LoLPro", game: "League of Legends", viewers: "40K" },
]

const chatMessages = [
  { user: "CoolGamer123", message: "Great stream!" },
  { user: "TwitchFan99", message: "How long have you been playing this game?" },
  { user: "StreamerSupporterXO", message: "Just subscribed! Love your content!" },
  { user: "GamingPro2023", message: "What's your favorite weapon in this game?" },
  { user: "ChillViewer42", message: "This is so relaxing to watch" },
]

const userChats = [
  { id: 1, name: "Alice", avatar: "/placeholder-user.jpg", lastMessage: "Hey, are you watching the stream?" },
  { id: 2, name: "Bob", avatar: "/placeholder-user.jpg", lastMessage: "Did you see that play?" },
  { id: 3, name: "Charlie", avatar: "/placeholder-user.jpg", lastMessage: "Let's play some games later!" },
]

interface ChatWindowProps {
  chat: typeof userChats[0]
  onClose: () => void
  onMinimize: () => void
}

function ChatWindow({ chat, onClose, onMinimize }: ChatWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false)

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
    onMinimize()
  }

  return (
    <div className={`bg-gray-800 rounded-t-lg overflow-hidden ${isMinimized ? 'h-12' : 'h-96'} w-80 flex flex-col`}>
      <div className="bg-gray-700 p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={chat.avatar} />
            <AvatarFallback>{chat.name[0]}</AvatarFallback>
          </Avatar>
          <span className="font-semibold">{chat.name}</span>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleMinimize}>
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {!isMinimized && (
        <>
          <ScrollArea className="flex-grow p-4">
            {/* Chat messages would go here */}
            <p className="text-gray-400">Start of your conversation with {chat.name}</p>
          </ScrollArea>
          <div className="p-4 border-t border-gray-700">
            <form className="flex items-center">
              <Input placeholder="Type a message..." className="flex-grow mr-2" />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default function TwitchClone() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true)
  const [openChats, setOpenChats] = useState<number[]>([])

  const toggleChat = (chatId: number) => {
    setOpenChats(prev =>
      prev.includes(chatId)
        ? prev.filter(id => id !== chatId)
        : [...prev, chatId]
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center space-x-4">
          <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
          </svg>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost">Browse</Button>
            <Button variant="ghost">Esports</Button>
            <Button variant="ghost">Music</Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Search" className="pl-8 bg-gray-700 border-gray-600" />
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-6 w-6" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">username</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    user@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help & Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className={`bg-gray-800 transition-all duration-300 ease-in-out ${leftSidebarOpen ? 'w-64' : 'w-16'} flex flex-col`}>
          <Button
            variant="ghost"
            size="icon"
            className="self-end m-2"
            onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
          >
            {leftSidebarOpen ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
          </Button>
          {leftSidebarOpen && (
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">Recommended Channels</h2>
              <ScrollArea className="h-[calc(100vh-8rem)]">
                {channels.map((channel, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder-user.jpg`} />
                      <AvatarFallback>{channel.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{channel.name}</p>
                      <p className="text-sm text-gray-400">{channel.game}</p>
                    </div>
                    <p className="text-sm text-red-500 ml-auto">{channel.viewers}</p>
                  </div>
                ))}
              </ScrollArea>
            </div>
          )}
          {!leftSidebarOpen && (
            <div className="p-2">
              {channels.map((channel, index) => (
                <Avatar key={index} className="mb-4">
                  <AvatarImage src={`/placeholder-user.jpg`} />
                  <AvatarFallback>{channel.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Featured Streams</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {featuredStreams.map((stream, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="relative">
                  <img src={`/placeholder.svg?height=200&width=400`} alt={stream.title} className="w-full h-48 object-cover" />
                  <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-1 rounded">LIVE</div>
                  <div className="absolute bottom-2 right-2 bg-gray-900 bg-opacity-75 text-white px-2 py-1 rounded">{stream.viewers} viewers</div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{stream.title}</h3>
                  <p className="text-sm text-gray-400 mb-1">{stream.streamer}</p>
                  <p className="text-sm text-gray-400">{stream.game}</p>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar (Chat) */}
        <aside className={`bg-gray-800 transition-all duration-300 ease-in-out ${rightSidebarOpen ? 'w-80' : 'w-16'} flex flex-col`}>
          <Button
            variant="ghost"
            size="icon"
            className="self-start m-2"
            onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
          >
            {rightSidebarOpen ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
          </Button>
          {rightSidebarOpen && (
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-gray-700">
                <h2 className="text-xl font-bold">Stream Chat</h2>
              </div>
              <ScrollArea className="flex-grow p-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className="mb-2">
                    <span className="font-semibold text-purple-400">{msg.user}: </span>
                    <span>{msg.message}</span>
                  </div>
                ))}
              </ScrollArea>
              <div className="p-4 border-t border-gray-700">
                <form className="flex items-center">
                  <Input placeholder="Send a message" className="flex-grow mr-2" />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          )}
          {!rightSidebarOpen && (
            <div className="flex flex-col items-center p-2">
              <Avatar className="mb-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
              <Send className="h-6 w-6 mb-4" />
            </div>
          )}
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-center">
        <p>&copy; 2023 Twitch Clone. All rights reserved.</p>
      </footer>

      {/* User Chats */}
      <div className="fixed bottom-0 right-0 flex space-x-2 p-4">
        {userChats.map(chat => (
          <Button
            key={chat.id}
            variant="outline"
            className="bg-gray-800 text-white hover:bg-gray-700"
            onClick={() => toggleChat(chat.id)}
          >
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={chat.avatar} />
              <AvatarFallback>{chat.name[0]}</AvatarFallback>
            </Avatar>
            {chat.name}
          </Button>
        ))}
      </div>

      {/* Open Chat Windows */}
      <div className="fixed bottom-0 right-0 flex space-x-2 p-4">
        {openChats.map(chatId => {
          const chat = userChats.find(c => c.id === chatId)
          if (!chat) return null
          return (
            <ChatWindow
              key={chat.id}
              chat={chat}
              onClose={() => toggleChat(chat.id)}
              onMinimize={() => { }}
            />
          )
        })}
      </div>
    </div>
  )
}
