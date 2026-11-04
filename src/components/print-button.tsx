"use client";

import { Icon } from "./icon";

export function PrintButton() {
  return <button className="button primary" type="button" onClick={() => window.print()}><Icon name="file" /> Imprimir / Salvar em PDF</button>;
}
