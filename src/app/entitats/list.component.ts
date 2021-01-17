import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Entitat } from "../models/entitat";
import { EntitatService } from "../services/entitat.service";


@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    entitats!: Entitat[];

    constructor(private entitatService: EntitatService) {}

    ngOnInit() {
        this.entitatService.getAll()
            .pipe(first())
            .subscribe(entitats => this.entitats = entitats);
    }

    deleteEntitat(id: number) {
        const entitat = this.entitats.find(x => x.id === id);
        if (!entitat) return;
        entitat.isDeleting = true;
        this.entitatService.delete(id)
            .pipe(first())
            .subscribe(() => this.entitats = this.entitats.filter(x => x.id !== id));
    }
}
