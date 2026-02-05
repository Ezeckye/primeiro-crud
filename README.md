# Primeiro CRUD de Clientes – Next.js + Firebase

Este projeto é um **CRUD completo de clientes** desenvolvido como parte de um curso prático de **Next.js**, com integração ao **Firebase Firestore** e organização moderna utilizando **hooks personalizados**.

O objetivo principal foi consolidar fundamentos de React/Next.js, entender a separação de responsabilidades (UI, domínio e dados) e praticar integração com backend real.

---

## 🚀 Tecnologias utilizadas

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Firebase Firestore**
* **Hooks personalizados**
* **Git & GitHub**

---

## 📂 Estrutura do projeto

```bash
lib/
 ├─ backend/
 │   └─ db/
 │       └─ ColecaoCliente.ts
 │
 ├─ client/
 │   └─ firebase.ts
 │
 ├─ core/
 │   └─ ClienteRepositorio.ts
 │
 ├─ hooks/
 │   ├─ useCliente.ts
 │   └─ useTabelaOuForm.ts
 │
 └─ models/
     └─ Cliente.ts
```

---

## ✨ Funcionalidades

* Listagem de clientes
* Criação de novo cliente
* Edição de cliente existente
* Exclusão de cliente
* Persistência de dados no **Firebase Firestore**
* Controle de visibilidade entre **tabela** e **formulário** via hooks

---

## 🧠 Conceitos praticados

* Componentização com React
* Estado e efeitos com `useState` e `useEffect`
* Criação de **hooks customizados**
* Padrão **Repository** para acesso a dados
* Integração client-side com Firebase
* Tipagem forte com TypeScript
* Organização de projeto escalável

---

## 🔐 Variáveis de ambiente

O projeto utiliza variáveis de ambiente para configurar o Firebase.

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

> ⚠️ O arquivo `.env.local` **não deve ser versionado** (já está ignorado no `.gitignore`).

---

## ▶️ Como rodar o projeto

```bash
npm install
npm run dev
```

Acesse:

```
http://localhost:3000
```

---

## 📌 Observações

* Este projeto é **educacional**, mas já possui uma base sólida para evoluir para um produto real.
* As cores e detalhes visuais foram personalizados em relação ao curso original.
* Próximos passos naturais incluem validações, confirmação de exclusão e melhorias de UX.

---

## 👤 Autor

Desenvolvido por **Ezequiel Dourado**
Curso prático de Next.js + Firebase

---

⭐ Se este projeto te ajudou de alguma forma, considere deixar uma estrela no repositório!
