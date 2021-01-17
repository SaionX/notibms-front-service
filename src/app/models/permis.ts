import { Role } from './role';
import {Tipus} from "./tipus";

export class Permis {
  id!: number;
  principal!: string;
  organ!: string;
  organNom!: string;
  nomSencerAmbCodi!: string;
  tipus: Tipus;
  read!: boolean;
  write!: boolean;
  create!: boolean;
  delete!: boolean;
  administration!: boolean;

  usuari!: boolean;
  administrador!: boolean;
  administradorEntitat!: boolean;
  aplicacio!: boolean;

  processar!: boolean;
  notificacio!: boolean;

  permetEdicio!: boolean;
}
