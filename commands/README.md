# 📂 **Struktur Folder Commands untuk Plugin CJS**  
**Tujuan:** Mengelola plugins berbasis **CommonJS (CJS)** dalam folder `commands` untuk modularitas dan skalabilitas kode.

---

## **Konsep**  
- **Plugins CJS** adalah modul Node.js yang diekspor menggunakan sintaks `module.exports`.  
- Folder `commands` berfungsi sebagai tempat penyimpanan semua plugin yang dapat di-load secara dinamis.  
- Setiap plugin memiliki fungsi atau logika spesifik yang bisa diakses melalui sistem command.

---

## **Langkah-langkah**  
### 1. **Buat Folder `commands`**  
```bash
mkdir commands
```

### 2. **Buat File Plugin CJS**  
Contoh: `commands/hello.cjs`  
```javascript
// hello.cjs
module.exports = {
  name: "hello",
  execute: () => {
    console.log("Hello, World! 🌍");
  },
};
```

### 3. **Load Plugin Secara Dinamis**  
Di file utama (misal: `app.cjs`):  
```javascript
const fs = require("fs");
const path = require("path");

// Baca semua file di folder commands
const commandsDir = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsDir).filter(file => file.endsWith(".cjs"));

// Load semua plugin
const commands = {};
for (const file of commandFiles) {
  const command = require(path.join(commandsDir, file));
  commands[command.name] = command;
}

// Contoh penggunaan plugin
commands.hello.execute(); // Output: Hello, World! 🌍
```


### File `bye.cjs`  
```javascript
module.exports = {
  name: "bye",
  execute: () => {
    console.log("Goodbye! 🚀");
  },
};
```

### Eksekusi Plugin  
```javascript
// Di file app.cjs
commands.bye.execute(); // Output: Goodbye! 🚀
```

---

## **Keuntungan**  
✅ **Modularitas:** Setiap plugin terpisah dalam file sendiri.  
✅ **Mudah Dikelola:** Tambah/hapus plugin tanpa mengubah kode utama.  
✅ **Skalabilitas:** Cocok untuk aplikasi CLI, bot Discord, atau tools kompleks.

---

## **Catatan**  
- Pastikan nama plugin unik untuk menghindari konflik.  
- Gunakan `try-catch` untuk menangani error saat load plugin.  
- Untuk performa, preload semua plugin saat aplikasi start.

---

✨ **Dengan struktur ini, pengembangan fitur menjadi lebih terorganisir dan profesional!** 🚀