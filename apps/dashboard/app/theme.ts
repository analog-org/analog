import { CustomFlowbiteTheme } from "flowbite-react/lib/esm/components/Flowbite/FlowbiteTheme";

export const customtheme: CustomFlowbiteTheme = {
  sidebar: {
    inner: 'h-screen overflow-y-auto overflow-x-hidden bg-zinc-900 py-4 px-3 ',
    item: {
      base: 'flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-800'
    },
    logo: {
      img: 'mr-3 h-6 rounded-full sm:h-7'
    }

  }
};
