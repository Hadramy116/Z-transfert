import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import leaflet from 'leaflet';
import { TransfertService } from '../../providers/transfert-service-mock';
import { TransfertDetailPage } from '../transfert-detail/transfert-detail';
import {moneyServices} from '../send-money/send-money.service';

@Component({
    selector: 'page-transfert-list',
    templateUrl: 'transfert-list.html',
    providers:[moneyServices]

})
export class TransfertListPage {

    transfers: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;

    constructor(public navCtrl: NavController, public service: TransfertService, public config: Config, moneyService :moneyServices) {
        this.findAll();
    }

    openPropertyDetail(property: any) {
        this.navCtrl.push(TransfertDetailPage, property);
    }

    onInput(event) {
        this.service.findByName(this.searchKey)
            .then(data => {
                this.transfers = data;
                if (this.viewMode === "map") {
                    this.showMarkers();
                }
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => this.transfers = data)
            .catch(error => alert(error));
    }

    showMap() {
        setTimeout(() => {
            this.map = leaflet.map("map").setView([42.361132, -71.070876], 14);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);
            this.showMarkers();
        })
    }

    showMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.transfers.forEach(property => {
            if (property.lat, property.long) {
                let marker: any = leaflet.marker([property.lat, property.long]).on('click', event => this.openPropertyDetail(event.target.data));
                marker.data = property;
                this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    }

}
