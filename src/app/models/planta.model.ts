export interface Plant {
    id?: string;
    name: string,
    size: 'small' | 'medium' | 'large',
    waterSchedule: waterSchedule,
    waterHistory: [waterSchedule],
    msToWater: number,
    plantsGroupId: string,
    plantOwner: string,
    plantStats: PlantStats,
}
interface waterSchedule {
    id: string;
    start: EpochTimeStamp;
    end: EpochTimeStamp;
    duration: number;
    createdByUserId: string;
}
interface PlantStats {
    id: string;
    humidity: string;
    daysAlive: number;
    timesWatered: number;
    hitpoints: number; // max 100%
}
