/**
 * Submodul: 239_form_data.ts
 * Topik: FormData API
 * Tujuan: Mengumpulkan pasangan kunci dan nilai dari form HTML untuk pengiriman multipart/form-data.
 */

console.log("=== FormData API di TypeScript ===");

class MockFormData {
    private entriesList: [string, string][] = [];

    append(key: string, value: string): void {
        this.entriesList.push([key, value]);
    }

    get(key: string): string | null {
        const found = this.entriesList.find(([k]) => k === key);
        return found ? found[1] : null;
    }

    entries(): [string, string][] {
        return this.entriesList;
    }
}

const formData = new MockFormData();
formData.append("username", "budi_developer");
formData.append("role", "frontend_lead");
formData.append("avatar_file", "foto_profil.png");

console.log("Muatan FormData:");
for (const [kunci, nilai] of formData.entries()) {
    console.log(`- ${kunci.padEnd(12, " ")}: ${nilai}`);
}
