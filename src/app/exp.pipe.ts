import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from './interfaces/pet';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

const expTable = [
  20, // 1
  40, // 2
  100, // 3
  250, // 4
  500, // 5
  1000, // 6
  1500, // 7
  4000, // 8
  10000 // 9
];

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {
  transform(pet: Pet, type: 'percent' | 'label'): any {
    const totalExp = pet.exp;
    const level = pet.level;
    const baseExp = expTable[level - 2] || 0;
    const nextExp = expTable[level - 1] - baseExp;
    const exp = totalExp - baseExp;

    if (type === 'percent') {
      return (exp / nextExp) * 100;
    } else {
      return exp + ' / ' + nextExp;
    }
  }
}
