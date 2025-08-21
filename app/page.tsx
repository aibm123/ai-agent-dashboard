'use client'

import { useState, useEffect } from 'react'
import { marked } from 'marked'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'chatbot' | 'dashboard'>('chatbot')
  const [chatMessages, setChatMessages] = useState([
    { message: 'Xin chào! Tôi là AI Agent, tôi có thể giúp bạn tra cứu thông tin đơn hàng và khách hàng.', sender: 'ai' }
  ])
  const [chatInput, setChatInput] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const CHATBOT_WEBHOOK_URL = process.env.NEXT_PUBLIC_CHATBOT_WEBHOOK_URL || 'https://aps.aibm.space/webhook/vibe1'

  const handleChatSubmit = async () => {
    const userInput = chatInput.trim()
    if (!userInput || isProcessing) return

    setIsProcessing(true)
    setChatMessages(prev => [...prev, { message: userInput, sender: 'user' }])
    setChatInput('')

    try {
      const response = await fetch(CHATBOT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "prompt": userInput, "threadId": "general-chat" })
      })

      if (!response.ok) throw new Error(`Lỗi từ webhook: ${response.status}`)

      const result = await response.json()
      const aiResponse = result[0]?.output || "Xin lỗi, tôi không thể xử lý yêu cầu này."
      setChatMessages(prev => [...prev, { message: aiResponse, sender: 'ai' }])
    } catch (error) {
      setChatMessages(prev => [...prev, { message: `Đã xảy ra lỗi: ${error instanceof Error ? error.message : 'Unknown error'}`, sender: 'ai' }])
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Agent & Báo cáo</h1>
          <p className="text-slate-600 mt-1">Chọn tab để bắt đầu</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-slate-200 mb-6">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          <button 
            onClick={() => setActiveTab('chatbot')}
            className={`tab-btn whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'chatbot' ? 'active' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Chatbot
          </button>
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`tab-btn whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'dashboard' ? 'active' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Báo cáo
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <main style={{ height: '70vh' }}>
        {/* Chatbot View */}
        {activeTab === 'chatbot' && (
          <div className="h-full">
            <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col h-full">
              <div className="flex-grow overflow-y-auto mb-4 pr-2 space-y-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-3 rounded-lg max-w-lg ${msg.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}`}>
                      <div dangerouslySetInnerHTML={{ __html: marked(msg.message) }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 border-t pt-4 flex-shrink-0">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyUp={(e) => e.key === 'Enter' && handleChatSubmit()}
                  placeholder="Hỏi AI, ví dụ: 'trạng thái đơn hàng ORD_12345'..." 
                  className="flex-grow w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  disabled={isProcessing}
                />
                <button 
                  onClick={handleChatSubmit}
                  disabled={isProcessing}
                  className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm flex items-center justify-center disabled:bg-indigo-400"
                >
                  Gửi
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
          <div className="h-full overflow-y-auto">
            <div className="text-center p-10">
              <div className="loader inline-block w-8 h-8 rounded-full border-4 border-slate-200" style={{ borderTopColor: '#4f46e5' }}></div>
              <p className="mt-4 text-slate-600">Dashboard đang được phát triển...</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
