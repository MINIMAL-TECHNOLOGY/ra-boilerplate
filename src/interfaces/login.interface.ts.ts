export interface ILogin {
  id: number
  identifier: { scheme: string; value: string }
  credential: { scheme: string; value: string }
  framework: string
}

export interface ILoginFormValue {
  id?: number
  identifier?: { scheme: string; value: string }
  credential?: { scheme: string; value: string }
  framework?: string
}

export interface ILoginErrorFormValue {
  identifier?: string
  credential?: string
}
