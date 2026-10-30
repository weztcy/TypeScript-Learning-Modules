/**
 * Submodul: 176_getters_setters.ts
 * Topik: Getter dan Setter (get / set)
 * Tujuan: Mengontrol akses dan validasi pembacaan serta penulisan properti privat.
 */

console.log("=== Getter dan Setter di TypeScript ===");

class ThermostatRuangan {
    private _suhuCelcius: number = 24;

    // Getter untuk membaca nilai suhu
    get suhuCelcius(): number {
        return this._suhuCelcius;
    }

    // Setter dengan validasi batasan suhu yang wajar
    set suhuCelcius(nilaiBaru: number) {
        if (nilaiBaru < 16 || nilaiBaru > 35) {
            console.log(`[PERINGATAN] Suhu ${nilaiBaru}°C di luar rentang aman AC (16°C - 35°C)!`);
            return;
        }
        this._suhuCelcius = nilaiBaru;
        console.log(`Suhu ruangan berhasil diatur ke ${this._suhuCelcius}°C`);
    }

    // Getter kalkulasi turunan (suhu dalam Fahrenheit)
    get suhuFahrenheit(): number {
        return (this._suhuCelcius * 9 / 5) + 32;
    }
}

const ac = new ThermostatRuangan();
console.log(`Suhu awal: ${ac.suhuCelcius}°C (${ac.suhuFahrenheit}°F)`);

ac.suhuCelcius = 20; // Valid
ac.suhuCelcius = 10; // Tidak valid (ditolak setter)
console.log(`Suhu sekarang: ${ac.suhuCelcius}°C (${ac.suhuFahrenheit}°F)`);
