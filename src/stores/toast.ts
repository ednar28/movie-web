import { defineStore } from 'pinia'

interface State {
  items: { id: string; message: string }[]
}

export const useToastStore = defineStore('Toast', {
  state: (): State => ({
    items: [],
  }),
  actions: {
    add(message: string) {
      // id for v-for key
      this.items.push({ message, id: Date.now().toString() })
      // 3s + 10ms per letters up to 5s
      const duration = Math.min(3000 + message.length * 10, 5000)
      setTimeout(() => {
        this.items.shift()
      }, duration)
    },
  },
})
