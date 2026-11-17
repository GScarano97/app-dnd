/** The API returns a separate list for each class level, not cumulative lists. */
export function eligibleLevels(rows: any[], level: number): {ref:any; level:number}[] {
 if (!Number.isInteger(level) || level < 1 || level > 20) return [];
 const result: {ref:any; level:number}[]=[];
 for (const row of rows) {
  const at=Number(row?.level);
  if (!Number.isInteger(at) || at < 1 || at > level || !Array.isArray(row.features)) continue;
  for (const ref of row.features) if(ref?.index && typeof ref.url==='string' && ref.url.startsWith('/api/2014/features/')) result.push({ref,level:at});
 }
 return result;
}
