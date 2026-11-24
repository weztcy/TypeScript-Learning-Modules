/**
 * Submodul: 281_nestjs_dependency_injection.ts
 * Topik: Dependency Injection (DI) pada NestJS
 * Tujuan: Menginjeksi service ke dalam controller melalui parameter konstruktor (*constructor injection*).
 */

console.log("=== Dependency Injection (DI) NestJS ===");

class EmailNotificationService {
    kirimEmail(tujuan: string, subjek: string): void {
        console.log(`[EMAIL DISPATCH] Mengirim pesan '${subjek}' ke ${tujuan}`);
    }
}

// Controller yang menerima dependency service melalui konstruktor
class UserRegistrationController {
    constructor(private readonly emailService: EmailNotificationService) {}

    daftarkanUser(email: string): void {
        console.log(`Pengguna dengan email '${email}' berhasil terdaftar.`);
        // Memanfaatkan injected service
        this.emailService.kirimEmail(email, "Selamat Bergabung di Platform Kami!");
    }
}

// Simulasi DI Container NestJS
const emailSvc = new EmailNotificationService();
const userCtrl = new UserRegistrationController(emailSvc);

userCtrl.daftarkanUser("mahasiswa_baru@kampus.id");
