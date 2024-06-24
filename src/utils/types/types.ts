// Sidebar Types
export type SidebarModule = {
  moduleName: string;
  path: string;
  icon?: React.ReactElement;
  subModules?: SidebarModule[];
  roles?: String[]; 
};

export type SidebarLinksProps = {
  modules: SidebarModule[];
};