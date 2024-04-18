import PUREDRIVE from "../src/img/puredrive.png";
import PUREAERO from "../src/img/pureaero.png";
import PURESTRIKE from "../src/img/purestrikevs.png";
import SPEED from "../src/img/speed.png";
import BOOM from "../src/img/boom.png";
import RADICAL from "../src/img/radical.png";
import EXTREME from "../src/img/extreme.png";
import PRESTIGE from "../src/img/prestige.png";
import GRAVITY from "../src/img/gravity.png";
import BLADE from "../src/img/blade.png";
import CLASH from "../src/img/clash.png";
import ULTRA from "../src/img/ultra.png";
import PROSTAFF from "../src/img/prostaff.png";
import VCORE from "../src/img/vcore.png";
import EZONE from "../src/img/ezone.png";
import PERCEPT from "../src/img/percept.png";

const produtos = [
  {
    marca: "BABOLAT",
    modelos: [
      {
        modelo: "PURE DRIVE 100",
        peso: "300G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR", "INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: PUREDRIVE,
        id: 1,
        preco: 1299.9,
        marca:'Babolat'
      },
      {
        modelo: "PURE DRIVE 98",
        peso: "300G",
        tamanho_cabeca: "98 sq in",
        padrao_cordas: "16X19",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: PUREDRIVE,
        id: 2,
        preco: 1300.0,
        marca:'Babolat'
      },
      {
        modelo: "PURE DRIVE TOUR 100",
        peso: "315G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: PUREDRIVE,
        id: 3,
        preco: 1100.0,
        marca:'Babolat'
      },
      {
        modelo: "PURE DRIVE 107",
        peso: "285G",
        tamanho_cabeca: "107 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: PUREDRIVE,
        id: 4,
        preco: 1100.0,
        marca:'Babolat'
      },
      {
        modelo: "PURE AERO 100",
        peso: "300G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR", "INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: PUREAERO,
        id: 5,
        preco: 1500.0,
        marca:'Babolat'
      },
      {
        modelo: "PURE AERO 98",
        peso: "305G",
        tamanho_cabeca: "98 sq in",
        padrao_cordas: "16X20",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO", "VARIADO"],
        img: PUREAERO,
        id: 6,
        preco: 1500.0,
        marca:'Babolat'
      },
      {
        modelo: "PURE AERO LITE",
        peso: "270G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: PUREAERO,
        id: 7,
        preco: 1500.0,
        marca:'Babolat'
      },
      {
        modelo: "PURE STRIKE VS 97",
        peso: "310G",
        tamanho_cabeca: "97 sq in",
        padrao_cordas: "16X20",
        nivel: ["AVANÇADO"],
        estilo: ["AGRESSIVO"],
        img: PURESTRIKE,
        id: 8,
        preco: 1450.0,
        marca:'Babolat'
      },
    ],
  },
  {
    marca: "HEAD",
    modelos: [
      {
        modelo: "SPEED MP 100",
        peso: "300G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR", "INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: SPEED,
        id: 9,
        preco: 1500.0,
        marca:'Head'
      },
      {
        modelo: "SPEED PRO 100",
        peso: "310G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "18X20",
        nivel: ["AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO", "VARIADO"],
        img: SPEED,
        id: 10,
        preco: 1600.0,
        marca:'Head'
      },
      {
        modelo: "BOOM MP 100",
        peso: "295G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR", "INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: BOOM,
        id: 11,
        preco: 1500.0,
        marca:'Head'
      },
      {
        modelo: "BOOM PRO 98",
        peso: "310G",
        tamanho_cabeca: "98 sq in",
        padrao_cordas: "16X19",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: BOOM,
        id: 12,
        preco: 1500.0,
        marca:'Head'
      },
      {
        modelo: "RADICAL MP 98",
        peso: "300G",
        tamanho_cabeca: "98 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR", "INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: RADICAL,
        id: 13,
        preco: 1600.0,
        marca:'Head'
      },
      {
        modelo: "RADICAL PRO 98",
        peso: "315G",
        tamanho_cabeca: "98 sq in",
        padrao_cordas: "16X19",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["AGRESSIVO"],
        img: RADICAL,
        id: 14,
        preco: 1600.0,
        marca:'Head'
      },
      {
        modelo: "EXTREME MP 100",
        peso: "300G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR", "INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: EXTREME,
        id: 15,
        preco: 1650.0,
        marca:'Head'
      },
      {
        modelo: "EXTREME TOUR 98",
        peso: "305G",
        tamanho_cabeca: "98 sq in",
        padrao_cordas: "16X19",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: EXTREME,
        id: 16,
        preco: 1650.0,
        marca:'Head'
      },
      {
        modelo: "PRESTIGE PRO 98",
        peso: "320G",
        tamanho_cabeca: "98 sq in",
        padrao_cordas: "18X20",
        nivel: ["AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO", "VARIADO"],
        img: PRESTIGE,
        id: 17,
        preco: 1350.0,
        marca:'Head'
      },
      {
        modelo: "PRESTIGE MP 99",
        peso: "310G",
        tamanho_cabeca: "99 sq in",
        padrao_cordas: "18X19",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["AGRESSIVO"],
        img: PRESTIGE,
        id: 18,
        preco: 1350.0,
        marca:'Head'
      },
      {
        modelo: "PRESTIGE TOUR 95",
        peso: "315G",
        tamanho_cabeca: "95 sq in",
        padrao_cordas: "16X19",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO", "VARIADO"],
        img: PRESTIGE,
        id: 19,
        preco: 1350.0,
        marca:'Head'
      },
      {
        modelo: "GRAVITY MP 100",
        peso: "295G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X20",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO", "VARIADO"],
        img: GRAVITY,
        id: 20,
        preco: 1450.0,
        marca:'Head'
      },
      {
        modelo: "GRAVITY PRO 100",
        peso: "315G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "18X20",
        nivel: ["AVANÇADO"],
        estilo: ["AGRESSIVO"],
        img: GRAVITY,
        id: 21,
        preco: 1450.0,
        marca:'Head'
      },
    ],
  },
  {
    marca: "WILSON",
    modelos: [
      {
        modelo: "BLADE 98 18x20",
        peso: "305G",
        tamanho_cabeca: "98 sq in",
        padrao_cordas: "18X20",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO", "VARIADO"],
        img: BLADE,
        id: 22,
        preco: 1750.0,
        marca:'Wilson'
      },
      {
        modelo: "BLADE 98 16x19",
        peso: "305G",
        tamanho_cabeca: "98 sq in",
        padrao_cordas: "16X19",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: BLADE,
        id: 23,
        preco: 1750.0,
        marca:'Wilson'
      },
      {
        modelo: "BLADE 104",
        peso: "290G",
        tamanho_cabeca: "104 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: BLADE,
        id: 24,
        preco: 1250.0,
        marca:'Wilson'
      },
      {
        modelo: "ULTRA 100",
        peso: "300G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: ULTRA,
        id: 25,
        preco: 1400.0,
        marca:'Wilson'
      },
      {
        modelo: "ULTRA 100L",
        peso: "280G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR", "INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: ULTRA,
        id: 26,
        preco: 1450.0,
        marca:'Wilson'
      },
      {
        modelo: "CLASH 100 PRO",
        peso: "310G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X20",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: CLASH,
        id: 27,
        preco: 1550.0,
        marca:'Wilson'
      },
      {
        modelo: "CLASH 100",
        peso: "295G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR", "INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: CLASH,
        id: 28,
        preco: 1550.0,
        marca:'Wilson'
      },
      {
        modelo: "CLASH 100L",
        peso: "280G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: CLASH,
        id: 29,
        preco: 1350.0,
        marca:'Wilson'
      },
      {
        modelo: "PRO STAFF 97",
        peso: "315G",
        tamanho_cabeca: "97 sq in",
        padrao_cordas: "16X19",
        nivel: ["AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO", "VARIADO"],
        img: PROSTAFF,
        id: 30,
        preco: 1700.0,
        marca:'Wilson'
      },
    ],
  },
  {
    marca: "YONEX",
    modelos: [
      {
        modelo: "EZONE 98",
        peso: "305G",
        tamanho_cabeca: "98 sq in",
        padrao_cordas: "16X19",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: EZONE,
        id: 31,
        preco: 1850.0,
        marca:'Yonex'
      },
      {
        modelo: "EZONE 100",
        peso: "300G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR", "INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: EZONE,
        id: 32,
        preco: 1750.0,
        marca:'Yonex'
      },
      {
        modelo: "EZONE 100 LIGHT",
        peso: "285G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: EZONE,
        id: 33,
        preco: 1500.0,
        marca:'Yonex'
      },
      {
        modelo: "VCORE 98",
        peso: "305G",
        tamanho_cabeca: "98 sq in",
        padrao_cordas: "16X19",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        id: 34,
        img: VCORE,
        preco: 1850.0,
        marca:'Yonex'
      },
      {
        modelo: "VCORE 100",
        peso: "300G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["AMADOR", "INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: VCORE,
        id: 35,
        preco: 1800.0,
        marca:'Yonex'
      },
      {
        modelo: "PERCEPT 97",
        peso: "310G",
        tamanho_cabeca: "97 sq in",
        padrao_cordas: "16X19",
        nivel: ["AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO"],
        img: PERCEPT,
        id: 36,
        preco: 1650.0,
        marca:'Yonex'
      },
      {
        modelo: "PERCEPT 97H",
        peso: "330G",
        tamanho_cabeca: "97 sq in",
        padrao_cordas: "16X19",
        nivel: ["AVANÇADO"],
        estilo: ["AGRESSIVO"],
        img: PERCEPT,
        id: 37,
        preco: 1700.0,
        marca:'Yonex'
      },
      {
        modelo: "PERCEPT 100",
        peso: "300G",
        tamanho_cabeca: "100 sq in",
        padrao_cordas: "16X19",
        nivel: ["INTERMEDIARIO", "AVANÇADO"],
        estilo: ["DEFENSIVO", "AGRESSIVO", "VARIADO"],
        img: PERCEPT,
        id: 38,
        preco: 1650.0,
        marca:'Yonex'
      },
    ],
  },
];
export default produtos;
