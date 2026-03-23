import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: 'Sep. 2011 - Sep. 2016\nMadrid, España',
    title: 'Graduate in Philosophy',
    subtitle: 'Universidad Complutense de Madrid',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, 4, 3),
    year: 'Sep. 2011 - Jul. 2016\nMadrid, España',
    title: 'Graduate in Hispanic Philology',
    subtitle: 'Universidad Complutense de Madrid',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, 8, 6),
    year: 'Feb. 2013 - Jul. 2013\nMadrid, España',
    title: 'Course in Behavioral Psychology',
    subtitle: 'Universidad Complutense de Madrid',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, 12, 9),
    year: 'Sep. 2018 - Mar. 2019\nZaragoza, España',
    title: 'Course in psychology of addiction',
    subtitle: 'Universidad de Zaragoza',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, 16, 12),
    year: 'Sep. 2019 - Jul. 2020\nZaragoza, España',
    title: "Master's Degree in Secondary Education and Guidance.",
    subtitle: 'Universidad de Zaragoza',
    position: 'right',
  }
];