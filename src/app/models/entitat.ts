import {Role} from './role';
import {EntitatTipus} from "./entitat-tipus";
import {DocumentTipus} from "./document-tipus";
import {Permis} from "./permis";

export class Entitat {
  id!: number;
  codi!: string;
  nom!: string;
  tipus!: EntitatTipus;
  dir3Codi!: string;
  dir3CodiReg!: string;
  apiKey!: string;
  ambEntregaDeh!: boolean;
  ambEntregaCie!: boolean;
  descripcio!: string;
  activa!: boolean;
  logoCapBytes: any[];
  eliminarLogoCap!: boolean;
  logoPeuBytes: any[];
  eliminarLogoPeu!: boolean;
  colorFons!: string;
  colorLletra!: string;
  tipusDoc!: DocumentTipus[];
  tipusDocDefault!: DocumentTipus;
  permisos!: Permis[];
  usuariActualAdministradorEntitat!: boolean;
  usuariActualAdministradorOrgan!: boolean;
  oficina!: string;
  nomOficinaVirtual!: string;
  llibreEntitat!: boolean;
  llibre!: string;
  llibreNom!: string;
  numAplicacions!: number;
  permisosCount!: number;
  isDeleting!: boolean;
}
