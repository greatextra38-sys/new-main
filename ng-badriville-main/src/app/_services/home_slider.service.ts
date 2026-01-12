import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { HomeSlider } from '../_models/home_slider';

export interface FilesUploadMetadata {
    uploadProgress$: Observable<number>;
    downloadUrl$: Observable<string>;
}

@Injectable({
    providedIn: 'root'
})

export class HomeSliderService {
    private dbhomeSlider = '/home-slider';

    constructor(
        private db: AngularFireDatabase
    ) {
    }

    getFiles(): AngularFireList<HomeSlider> {
        return this.db.list(this.dbhomeSlider);
    }
}