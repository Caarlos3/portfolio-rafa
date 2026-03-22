import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: 'YYYY',
    title: '[Nombre de tu Título]',
    subtitle: '[Institución o Universidad]',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: 'Próximamente...',
    title: 'Mi Experiencia',
    subtitle: '[Aquí añadiré mi experiencia]',
    position: 'left',
  }
];