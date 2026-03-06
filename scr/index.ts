import { Especialidade } from "./types/especialidade";
import { Paciente } from "./types/paciente";
import { StatusConsulta } from "./types/statusConsulta";
import { Medico } from "./interfaces/medico";
import { Consulta } from "./interfaces/consulta";

// Especialidades
const cardiologia: Especialidade = {
  id: 1,
  nome: "Cardiologia",
};
const ortopedia: Especialidade = {
  id: 2,
  nome: "Ortopedia",
  descricao: "Tratamento de ossos e articulações",
};
const pediatria: Especialidade = {
  id: 3,
  nome: "Pediatria",
};
const fisioterapeuta: Especialidade = {
  id: 4,
  nome: "fisioterapeuta",
};

// Médicos
const medico1: Medico = {
  id: 1,
  nome: "Dr. Davi Lucca",
  crm: "CRM12345",
  especialidade: cardiologia,
  ativo: true,
};
const medico2: Medico = {
  id: 2,
  nome: "Dr. Neymar Jr.",
  crm: "CRM54321",
  especialidade: ortopedia,
  ativo: true,
};
const medico3: Medico = {
  id: 3,
  nome: "Dra. Biancardi",
  crm: "CRM98765",
  especialidade: pediatria,
  ativo: true,
};
const medico4: Medico = {
  id: 4,
  nome: "Dra. Julia",
  crm: "CR450265",
  especialidade: fisioterapeuta,
  ativo: true,
};

// Pacientes
const paciente1: Paciente = {
  id: 1,
  nome: "Joao Vitor",
  cpf: "119.375.009-77",
  email: "jotave006@gmail.com",
};
const paciente2: Paciente = {
  id: 2,
  nome: "Angela",
  cpf: "987.654.321-00",
  email: "aangela@gmail.com",
  telefone: "(11) 98765-4321",
};
const paciente3: Paciente = {
  id: 3,
  nome: "Pedro Santos",
  cpf: "456.789.123-00",
  email: "pedro@email.com",
};
const paciente4: Paciente = {
  id: 3,
  nome: "Rafael Da Lacoste",
  cpf: "459.824.838-69",
  email: "rafaael@email.com",
};

function criarConsulta(
  id: number,
  medico: Medico,
  paciente: Paciente,
  data: Date,
  valor: number
): Consulta {
  return {
    id,
    medico,
    paciente,
    data,
    valor,
    status: "agendada",
  };
}

function confirmarConsulta(consulta: Consulta): Consulta {
  return {
    ...consulta,
    status: "confirmada",
  };
}

function cancelarConsulta(consulta: Consulta): Consulta | null {
  if (consulta.status === "realizada") {
    return null;
  }
  return {
    ...consulta,
    status: "cancelada",
  };
}

function exibirConsulta(consulta: Consulta): string {
  const valorFormatado = consulta.valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return `
Consulta #${consulta.id}
Médico: ${consulta.medico.nome}
Paciente: ${consulta.paciente.nome}
Especialidade: ${consulta.medico.especialidade.nome}
Data: ${consulta.data.toLocaleDateString("pt-BR")}
Valor: ${valorFormatado}
Status: ${consulta.status}
`;
}

const consulta1 = criarConsulta(
  1,
  medico1,
  paciente1,
  new Date(2026, 1, 5),
  350
);

const consulta2 = criarConsulta(
  2,
  medico2,
  paciente2,
  new Date(2026, 10, 12),
  450
);

const consulta3 = criarConsulta(
  3,
  medico3,
  paciente3,
  new Date(2026, 11, 31),
  550
);

const consulta4 = criarConsulta(
  4,
  medico4,
  paciente4,
  new Date(2026, 5, 22),
  1000
);

const consultaConfirmada = confirmarConsulta(consulta1);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada));

const consultaConfirmada2 = confirmarConsulta(consulta2);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada2));

const consultaConfirmada3 = confirmarConsulta(consulta3);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada3));

const consultaConfirmada4 = confirmarConsulta(consulta4);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada4));
