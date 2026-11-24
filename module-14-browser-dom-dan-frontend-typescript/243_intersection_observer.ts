/**
 * Submodul: 243_intersection_observer.ts
 * Topik: Intersection Observer API
 * Tujuan: Mendeteksi keterlihatan elemen di dalam viewport (misal untuk lazy-loading gambar atau infinite scroll).
 */

console.log("=== Intersection Observer API ===");

interface MockIntersectionObserverEntry {
    targetId: string;
    isIntersecting: boolean;
    intersectionRatio: number;
}

function tanganiKeterlihatan(entries: MockIntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(`[IN VIEWPORT] Elemen #${entry.targetId} terlihat di layar (Rasio: ${entry.intersectionRatio * 100}%)`);
            console.log(">> Memulai lazy-loading aset gambar resolusi tinggi...");
        } else {
            console.log(`[OFFSCREEN] Elemen #${entry.targetId} berada di luar area pandang.`);
        }
    });
}

const sampelMasuk: MockIntersectionObserverEntry[] = [
    { targetId: "banner-promosi", isIntersecting: true, intersectionRatio: 0.85 },
    { targetId: "footer-bawah", isIntersecting: false, intersectionRatio: 0.0 }
];

tanganiKeterlihatan(sampelMasuk);
