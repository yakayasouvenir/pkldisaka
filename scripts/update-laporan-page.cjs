const fs = require('fs');
const path = require('path');

const convertedHtml = fs.readFileSync(path.join(__dirname, 'converted_doc.html'), 'utf8');

// Wrap in full Astro page
const astroContent = `---
// src/pages/dokumen-pkl/laporan-pkl.astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import PageHero from '../../components/PageHero.astro';
import StatusNotice from '../../components/StatusNotice.astro';
import FAQList from '../../components/FAQList.astro';
import CTASection from '../../components/CTASection.astro';
import { faqNode } from '../../lib/schema';

const crumbs = [
  { name: 'Dokumen PKL', path: '/dokumen-pkl/surat-lamaran/' },
  { name: 'Contoh Laporan PKL SMK', path: '/dokumen-pkl/laporan-pkl/' },
];

const faqs = [
  {
    q: 'Apakah naskah contoh laporan PKL SMK ini sesuai dengan dokumen aslinya?',
    a: 'Ya, tata letak, susunan bab, halaman judul, motto, persembahan, kata pengantar, daftar isi, 13 dokumentasi kegiatan bergambar, hingga lampiran telah ditransformasikan sama persis sesuai dokumen asli Word (.docx).',
  },
  {
    q: 'Bagaimana cara mengunduh atau menyalin naskah ini?',
    a: 'Anda dapat langsung menekan tombol \\'Download Dokumen Asli (.docx)\\' untuk mendapatkan file Word aslinya, atau menekan tombol \\'Salin Seluruh Naskah\\' untuk menyalin teks ke clipboard.',
  },
  {
    q: 'Bagaimana cara menyesuaikan bagian di dalam kurung siku [ ]?',
    a: 'Cukup ganti bagian seperti [Nama Peserta], [NIS/NIM], [Nama Sekolah], dan [Nama Perusahaan/Instansi] dengan identitas resmi Anda masing-masing.',
  },
];
---

<BaseLayout
  title="Contoh Laporan PKL SMK Lengkap Doc & Panduan Penulisan Laporan Akhir | pkldisaka.id"
  description="Dokumen naskah lengkap contoh laporan PKL SMK asli: Halaman Judul, Motto, Persembahan, Kata Pengantar, Daftar Isi, Bab I s/d Bab IV, 13 Dokumentasi Kerja, dan Lampiran."
  path="/dokumen-pkl/laporan-pkl/"
  crumbs={crumbs}
  schema={[faqNode('/dokumen-pkl/laporan-pkl/', faqs)]}
>
  <PageHero
    eyebrow="DOKUMEN & FORMAT BAKU PKL"
    title="Contoh Laporan PKL SMK Lengkap (Dokumen Asli Word / Doc)"
    lead="Format dan tata letak asli naskah portofolio serta laporan akhir Praktik Kerja Lapangan (PKL) SMK sesuai standar industri. Teks dan dokumen dapat langsung diunduh atau disalin."
    crumbs={crumbs}
    bgImage="/images/9.webp"
  />

  <section class="content-section py-5">
    <div class="container">
      <div class="row g-4 g-xl-5 justify-content-center">
        <!-- Main Document Reader (Exact Paper Styled) -->
        <div class="col-lg-10">
          <StatusNotice
            status="Naskah Resmi Sesuai Dokumen Asli"
            targetDate="10/01/2026"
            note="Dokumen di bawah ini disusun sama persis dengan berkas asli Template_Laporan_PKL_Universal.docx. Bagian dalam tanda kurung siku [...] dapat disesuaikan dengan data Anda."
          />

          <!-- Quick Action Toolbar -->
          <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 p-3 mb-4 rounded-3 bg-light border shadow-sm">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-file-earmark-word-fill fs-3 text-primary"></i>
              <div>
                <strong class="d-block text-dark">Template Laporan PKL SMK Universal (.docx)</strong>
                <small class="text-muted">Tata letak baku identik dengan dokumen fisik Microsoft Word</small>
              </div>
            </div>
            <div class="d-flex align-items-center gap-2">
              <a
                href="/Template_Laporan_PKL_Universal.docx"
                download="Template_Laporan_PKL_Universal.docx"
                class="btn btn-primary-saka btn-sm rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-1.5 shadow-xs text-decoration-none"
              >
                <i class="bi bi-download"></i>
                <span>Download Dokumen Asli (.docx)</span>
              </a>
              <button
                type="button"
                id="copyDocBtn"
                class="btn btn-outline-primary btn-sm rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-1.5 shadow-xs"
              >
                <i class="bi bi-clipboard-check"></i>
                <span id="copyBtnText">Salin Seluruh Naskah</span>
              </button>
            </div>
          </div>

          <!-- Document Paper Container (Identical to docx) -->
          <div
            id="naskah-dokumen"
            class="doc-paper-container bg-white p-4 p-md-5 rounded-4 border shadow-sm mb-5 font-serif"
            style="border-color: #cbd5e1 !important; line-height: 1.8; color: #1e293b;"
          >
            <div class="doc-body-exact">
              ${convertedHtml}
            </div>
          </div>

          <!-- FAQ Component -->
          <FAQList faqs={faqs} />
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Global Section -->
  <CTASection />
</BaseLayout>

<style>
  .font-serif {
    font-family: 'Times New Roman', Times, serif, system-ui;
  }
  .doc-paper-container {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
    background-color: #ffffff;
    max-width: 860px;
    margin-left: auto;
    margin-right: auto;
  }
  .doc-body-exact {
    font-size: 1.05rem;
    color: #1e293b;
    text-align: justify;
  }
  .doc-body-exact h1 {
    font-size: 1.45rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: #0f172a;
    letter-spacing: 0.5px;
    line-height: 1.4;
  }
  .doc-body-exact h2 {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #1e293b;
  }
  .doc-body-exact h3 {
    font-size: 1.15rem;
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: #1e293b;
  }
  .doc-body-exact p {
    margin-bottom: 1rem;
    line-height: 1.85;
  }
  .doc-body-exact img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1.25rem auto;
    border-radius: 6px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  .doc-body-exact ol {
    padding-left: 1.75rem;
    margin-bottom: 1.25rem;
  }
  .doc-body-exact ol li {
    margin-bottom: 0.5rem;
    line-height: 1.75;
  }
  .doc-body-exact a {
    color: #0284c7;
    text-decoration: underline;
  }
</style>

<script>
  const copyBtn = document.getElementById('copyDocBtn');
  const copyText = document.getElementById('copyBtnText');
  const docContainer = document.getElementById('naskah-dokumen');

  if (copyBtn && docContainer) {
    copyBtn.addEventListener('click', async () => {
      try {
        const textToCopy = docContainer.innerText;
        await navigator.clipboard.writeText(textToCopy);
        if (copyText) {
          const original = copyText.textContent;
          copyText.textContent = 'Berhasil Disalin!';
          copyBtn.classList.remove('btn-outline-primary');
          copyBtn.classList.add('btn-success');
          setTimeout(() => {
            copyText.textContent = original;
            copyBtn.classList.remove('btn-success');
            copyBtn.classList.add('btn-outline-primary');
          }, 3000);
        }
      } catch (err) {
        alert('Gagal menyalin naskah secara otomatis. Silakan blok dan salin secara manual.');
      }
    });
  }
</script>
`;

fs.writeFileSync(path.join(__dirname, '../src/pages/dokumen-pkl/laporan-pkl.astro'), astroContent, 'utf8');
console.log('Successfully updated src/pages/dokumen-pkl/laporan-pkl.astro with exact docx layout!');
