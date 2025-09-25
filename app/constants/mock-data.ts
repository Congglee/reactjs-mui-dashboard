export const mockUsersSpark = [12, 13, 12, 13, 13, 14, 14, 15, 14, 15, 16, 15, 16, 17, 16, 17, 18]

export const mockConvSpark = [8, 7, 9, 7, 6, 7, 6, 6, 7, 5, 6, 5, 5, 5, 4, 4, 3]

export const mockEventSpark = [10, 10, 10, 10, 11, 10, 10, 10, 10, 10, 9, 10, 10, 10, 10, 10, 10]

export const mockSessionsA = [
  900, 1800, 1200, 2500, 4200, 3800, 5200, 6100, 7200, 6800, 9100, 9800, 12000, 13500, 15000, 13800, 16000, 17500,
  19000, 20500, 19800, 21500, 22500, 23500, 24500, 25500
]

export const mockSessionsB = mockSessionsA.map((v) => Math.max(0, Math.round(v * 0.6 + (Math.random() - 0.5) * 1200)))

export const mockSessionsC = mockSessionsA.map((v) => Math.max(0, Math.round(v * 0.35 + (Math.random() - 0.5) * 800)))

export const mockPageViews = [10000, 10500, 8200, 11000, 12500, 8400, 7200]

export const mockDownloads = [2500, 3200, 2800, 4100, 5200, 3000, 2600]
