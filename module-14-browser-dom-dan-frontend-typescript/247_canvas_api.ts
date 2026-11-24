/**
 * Submodul: 247_canvas_api.ts
 * Topik: Canvas API (2D Context Drawing)
 * Tujuan: Menggambar grafik 2D berbasis koordinat piksel secara terketik di TypeScript.
 */

console.log("=== Canvas API di TypeScript ===");

interface MockCanvasRenderingContext2D {
    fillStyle: string;
    fillRect(x: number, y: number, width: number, height: number): void;
    strokeRect(x: number, y: number, width: number, height: number): void;
}

class MockCanvasContext implements MockCanvasRenderingContext2D {
    fillStyle: string = "#000000";

    fillRect(x: number, y: number, w: number, h: number): void {
        console.log(`[CANVAS DRAW] Menggambar persegi terisi warna '${this.fillStyle}' di (${x}, ${y}) ukuran ${w}x${h} px`);
    }

    strokeRect(x: number, y: number, w: number, h: number): void {
        console.log(`[CANVAS STROKE] Menggambar bingkai persegi di (${x}, ${y}) ukuran ${w}x${h} px`);
    }
}

const ctx = new MockCanvasContext();
ctx.fillStyle = "#2563EB"; // Warna biru
ctx.fillRect(10, 10, 100, 50);

ctx.strokeRect(5, 5, 110, 60);
