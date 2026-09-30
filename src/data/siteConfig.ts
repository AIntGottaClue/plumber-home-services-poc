export const siteConfig = {
  slug: 'sample-plumber', name: 'Oak & Water Plumbing', city: 'Austin', region: 'TX',
  phone: '', website: '', sourceUrl: '', verifiedAt: '',
  services: ['Drain cleaning','Leak repair','Water heaters','Fixture repairs'],
  areas: ['Austin','Round Rock','Cedar Park'],
  preview: true, sample: true,
  sheetId: '1uYaj741H-TyN7XuRHlHvBGXmK8ZIXifhDHJ8gTJzZaY', sheetName: 'Businesses',
};
export const mode = process.env.DATA_MODE === 'gviz' ? 'gviz' : 'config';
