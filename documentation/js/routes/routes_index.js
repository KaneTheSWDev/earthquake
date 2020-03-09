var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"chart","loadChildren":"./charts/charts.module#ChartsModule"},{"path":"table","loadChildren":"./table/table.module#TableModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/table/table-routing.module.ts","module":"TableRoutingModule","children":[{"path":"","component":"DataTableComponent"}],"kind":"module"}],"module":"TableModule"}]},{"path":"map","loadChildren":"./map/map.module#MapModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/map/map-routing.module.ts","module":"MapRoutingModule","children":[{"path":"","component":"DataMapComponent"}],"kind":"module"}],"module":"MapModule"}]},{"path":"","redirectTo":"/overview","pathMatch":"full"},{"path":"**","redirectTo":"/overview","pathMatch":"full"}],"kind":"module"},{"name":"routes","filename":"src/app/charts/charts-routing.module.ts","module":"ChartsRoutingModule","children":[{"path":"overview","component":"LinearGaugeComponent"},{"path":"pie","component":"PieChartComponent"},{"path":"vertical","component":"VerticalChartComponent"},{"path":"pie-grid","component":"PieGridComponent"}],"kind":"module"}]}
