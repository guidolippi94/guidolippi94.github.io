<template>
  <div class="bg-background container mx-auto">
    <nav
      class="
        bg-white
        border-primary border-b-2
        px-2
        sm:px-4
        py-2.5
        dark:bg-gray-900
      "
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <nuxt-link href="#" class="flex items-center">
          <div class="text-3xl mr-4">👨🏻‍💻</div>
          <span
            class="
              self-center
              text-xl
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            >Guido Lippi</span
          >
        </nuxt-link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="
            inline-flex
            items-center
            p-2
            ml-3
            text-sm text-gray-500
            rounded-lg
            md:hidden
            hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-gray-200
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
          "
          aria-controls="navbar-default"
          aria-expanded="false"
          @click="toggleMenu"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          :class="{
            hidden: !openMenu,
            block: openMenu,
          }"
          class="w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul
            class="
              flex flex-col
              p-4
              mt-4
              border border-gray-100
              rounded-lg
              bg-gray-50
              md:flex-row
              md:space-x-8
              md:mt-0
              md:text-sm
              md:font-medium
              md:border-0
              md:bg-white
              dark:bg-gray-800
              md:dark:bg-gray-900
              dark:border-gray-700
            "
          >
            <li v-for="(item, i) in menuItems" :key="i">
              <nuxt-link
                href="#"
                class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
                :class="{
                  active: item.active,
                  inactive: !item.active,
                }"
                aria-current="page"
                :to="item.link"
                >{{ item.name }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Nuxt content -->
    <slot />
  </div>
</template>

<script  lang="ts">
export default {
  data() {
    return {
      openMenu: false,
      menuItems: [
        {
          name: "Home",
          link: "#",
          active: true,
        },
        {
          name: "About",
          link: "#",
          active: false,
        },
        {
          name: "Services",
          link: "#",
          active: false,
        },
        {
          name: "Pricing",
          link: "#",
          active: false,
        },
        {
          name: "Contact",
          link: "#",
          active: false,
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
  },
};
</script>

<style lang="postcss" scoped>
.active {
  @apply text-white bg-primary md:bg-transparent md:text-primary;
}
.inactive {
  @apply text-gray-500 dark:text-gray-400;
}
</style>