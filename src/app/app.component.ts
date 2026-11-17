import { PwaStatusComponent } from "./shared/pwa-status/pwa-status.component";
import { Component, inject } from "@angular/core";
import { CharacterService } from "./core/character.service";
import { OverviewComponent } from "./overview/overview.component";
import { AbilitiesComponent } from "./abilities/abilities.component";
import { MagicComponent } from "./magic/magic.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { NotesComponent } from "./notes/notes.component";
import { CatalogComponent } from "./catalog/catalog.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    OverviewComponent,
    AbilitiesComponent,
    MagicComponent,
    InventoryComponent,
    NotesComponent,
    CatalogComponent,
    PwaStatusComponent,
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  c = inject(CharacterService);
  page = "overview";
  moreOpen = false;
  shortLabels: Record<string, string> = {
    overview: "Scheda",
    abilities: "Abilità",
    magic: "Capacità",
    inventory: "Borsa",
    catalog: "Catalogo",
    notes: "Note",
  };
  nav = [
    ["overview", "◈", "Panoramica"],
    ["abilities", "✥", "Caratteristiche"],
    ["magic", "✦", "Magia e capacità"],
    ["inventory", "▣", "Inventario"],
    ["catalog", "✧", "Catalogo SRD"],
    ["notes", "☷", "Tratti e note"],
  ];
  constructor() {
    const page = location.hash.slice(1);
    if (this.nav.some((n) => n[0] === page)) this.page = page;
    window.addEventListener("popstate", () => {
      const next = location.hash.slice(1);
      this.page = this.nav.some((n) => n[0] === next) ? next : "overview";
      this.moreOpen = false;
    });
  }
  select(p: string) {
    if (this.page !== p) {
      this.page = p;
      history.pushState(null, "", "#" + p);
    }
    this.moreOpen = false;
    window.scrollTo(0, 0);
  }
  get pageName() {
    return this.nav.find((n) => n[0] === this.page)?.[2].toUpperCase() || "";
  }
  reset() {
    if (
      confirm(
        "Ripristinare la scheda vuota? Esporta prima un backup se desideri conservarla.",
      )
    )
      this.c.reset();
  }
  async importFile(event: Event) {
    const input = event.target as HTMLInputElement;
    try {
      let file = input.files?.[0];
      if (
        file &&
        confirm("Sostituire la scheda attuale con il salvataggio importato?")
      )
        this.c.import(await file.text());
    } catch {
      alert("Il file non è una scheda Registro Arcano valida.");
    } finally {
      input.value = "";
    }
  }
  print() {
    window.print();
  }
}
