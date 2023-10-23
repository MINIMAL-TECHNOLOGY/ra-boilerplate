import { IMetaLink } from '@/interfaces'
import { getNowFormat } from './date.util'

export const downloadExcel = (data: any, table: string) => {
  const url = URL.createObjectURL(new Blob([new Uint8Array(data.data)]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `${table}_${getNowFormat({})}.xlsx`)
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export const downloadFile = (file: IMetaLink) => {
  const downloadLink = document.createElement('a')
  downloadLink.setAttribute('href', file.link || '')
  downloadLink.setAttribute('download', file.name || '')
  downloadLink.click()
  downloadLink.remove()
}
