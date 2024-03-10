import { c as create_ssr_component, f as each, e as escape } from './ssr-DzG_XWZZ.js';

const css = {
  code: ".shuerthome.svelte-1yb4x4x.svelte-1yb4x4x{margin:50px auto;width:85%;height:fit-content;color:#f2f2f2;display:flex;flex-direction:column;align-items:flex-start;gap:20px}.tablecontainer.svelte-1yb4x4x.svelte-1yb4x4x{width:100%;border-radius:10px;overflow:hidden}table.svelte-1yb4x4x.svelte-1yb4x4x{width:100%;border-collapse:collapse;border-spacing:0}th.svelte-1yb4x4x.svelte-1yb4x4x,td.svelte-1yb4x4x.svelte-1yb4x4x{text-align:center;padding:10px}tbody.svelte-1yb4x4x.svelte-1yb4x4x{border-radius:10px}.table-row.svelte-1yb4x4x.svelte-1yb4x4x:nth-child(odd){background-color:rgba(255, 255, 255, 0.1)}.table-row.svelte-1yb4x4x.svelte-1yb4x4x:nth-child(even){background-color:rgba(128, 128, 128, 0.1)}tbody.svelte-1yb4x4x tr:first-child td.svelte-1yb4x4x:first-child{border-top-left-radius:10px}tbody.svelte-1yb4x4x tr:first-child td.svelte-1yb4x4x:last-child{border-top-right-radius:10px}@media(max-width: 1921px){.tablecontainer.svelte-1yb4x4x.svelte-1yb4x4x{overflow-x:auto}}@media(max-width: 1025px){.tablecontainer.svelte-1yb4x4x.svelte-1yb4x4x{overflow-x:auto}}",
  map: null
};
const Specs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { columns = [] } = $$props;
  let { data = [] } = $$props;
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="shuerthome svelte-1yb4x4x"><h1 data-svelte-h="svelte-1o9ey82">Specifications</h1> <div class="tablecontainer svelte-1yb4x4x"><table class="svelte-1yb4x4x"><thead><tr>${each(columns, (column) => {
    return `<th class="svelte-1yb4x4x">${escape(column)}</th>`;
  })}</tr></thead> <tbody class="svelte-1yb4x4x">${each(data, (row) => {
    return `<tr class="table-row svelte-1yb4x4x">${each(row, (cell) => {
      return `<td class="svelte-1yb4x4x">${escape(cell)}</td>`;
    })} </tr>`;
  })}</tbody></table></div> </div>`;
});

export { Specs as S };
//# sourceMappingURL=Specs-BZqHowXi.js.map
