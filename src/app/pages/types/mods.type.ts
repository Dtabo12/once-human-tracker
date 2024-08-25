import { BaseType } from "@shared/types/base-type.type"
import { MapLocation } from "./map-location.type"

export type Mod = {
  id: number,
  name: string,
  description: string,
  type: string,
  modType: string,
  category: BaseType,
  src: string,
  dropLocation: MapLocation[]
}