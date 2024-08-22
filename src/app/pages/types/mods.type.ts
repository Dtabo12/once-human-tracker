import { BaseType } from "@shared/types/base-type.type"

export type Mod = {
  id: number,
  name: string,
  description: string,
  category: BaseType,
  src: string,
  suffix?: BaseType,
}