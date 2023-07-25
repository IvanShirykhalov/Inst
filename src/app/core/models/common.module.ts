export interface BaseResponseType<T = {}> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export interface MeResponse {
  data: {
    id: number
    login: string
    email: string
  }
  messages: string[]
  fieldErrors: string[]
  resultCode: number
}

export type severityType = 'error' | 'success' | 'info' | 'warning'
