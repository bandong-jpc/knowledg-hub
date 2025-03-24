<script lang="ts">
import { HubCategoryObjects } from "~/constants.js";

export default {
  name: "TopNav",
  methods: {
    addClass: function (callerId: string) {
      const container = document.getElementById(`${callerId}-submenu`);
      container?.classList.add("hidden");
    },
    removeClass: function (callerId: string) {
      const container = document.getElementById(`${callerId}-submenu`);
      container?.classList.remove("hidden");
    },
  },
  data: () => ({
    categories: HubCategoryObjects,
  }),
  setup() {
    const showNav = ref(false);

    const toggleNav = () => {
      showNav.value = !showNav.value;
    };

    return {
      showNav,
      toggleNav,
    };
  },
};
</script>
<template>
  <nav>
    <div class="w-full h-8 lg:h-9 bg-[#ed018b]">
      <div
        class="w-full h-8 lg:h-9 lg:max-w-[1230px] px-4 mx-auto flex justify-between items-center text-xs lg:text-sm text-white"
      >
        <div class="flex justify-start gap-4">
          <!-- Consumer button -->
          <div>
            <button
              class="h-8 lg:h-9"
              @mouseenter="removeClass('consumer')"
              @mouseleave="addClass('consumer')"
              id="consumer"
            >
              <div class="flex justify-start items-center gap-2">
                <div>Consumer</div>
                <Icon name="mi:chevron-down" style="color: white" />
              </div>
            </button>
            <div class="hidden" id="consumer-submenu">
              <div
                class="absolute z-40 bg-gray-800 !border-l !border-r !border-gray-700 shadow-md"
              >
                <button
                  class="block px-2 lg:px-4 py-2 text-xs lg:text-sm text-blue-500 w-full text-left border-b border-gray-700"
                >
                  Dealer
                </button>
                <button
                  class="block px-2 lg:px-4 py-2 text-xs lg:text-sm text-blue-500 w-full text-left border-b border-gray-700"
                >
                  Specifiers
                </button>
                <button
                  class="block px-2 lg:px-4 py-2 text-xs lg:text-sm text-blue-500 w-full text-left border-b border-gray-700"
                >
                  Food Service
                </button>
              </div>
            </div>
          </div>

          <!-- Location button -->
          <div>
            <button
              class="h-8 lg:h-9"
              @mouseenter="removeClass('country')"
              @mouseleave="addClass('country')"
              id="country"
            >
              <div class="flex justify-start items-center gap-2">
                <div>Australia</div>
                <Icon name="mi:chevron-down" style="color: white" />
              </div>
            </button>
            <div class="hidden" id="country-submenu">
              <div
                class="absolute z-40 bg-gray-800 !border-l !border-r !border-gray-700 shadow-md"
              >
                <button
                  class="block px-2 lg:px-4 py-2 text-xs lg:text-sm text-blue-500 w-full text-left border-b border-gray-700"
                >
                  New Zealand
                </button>
              </div>
            </div>
          </div>

          <!-- Dealer Login button -->
          <div class="flex justify-start items-center gap-2">
            <button class="hover:underline text-white hover:text-white">
              Dealer Login
            </button>
            <div class="hidden" id="consumer-submenu">
              <div
                class="absolute z-40 bg-gray-800 !border-l !border-r !border-gray-700 shadow-md"
              ></div>
            </div>
          </div>
        </div>

        <div class="gap-4 items-center hidden lg:flex">
          <a target="_blank" href="https://www.facebook.com/puretecgroup/">
            <Icon name="tabler:brand-facebook-filled" style="color: white" />
          </a>
          <a target="_blank" href="https://www.instagram.com/puretec_group/">
            <Icon name="tabler:brand-instagram" style="color: white" />
          </a>
          <a target="_blank" href="https://www.pinterest.com.au/Puretec_Group/">
            <Icon name="tabler:brand-pinterest-filled" style="color: white" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCjgjmU9kLWDHrSZYcj5RvUQ"
          >
            <Icon name="tabler:brand-youtube-filled" style="color: white" />
          </a>
          <a
            target="_blank"
            href="https://au.linkedin.com/company/puretec-group"
          >
            <Icon name="tabler:brand-linkedin-filled" style="color: white" />
          </a>
        </div>
      </div>
    </div>

    <div class="hidden lg:block h-[128.35px] bg-black">
      <div>
        <div class="bg-black hidden lg:block">
          <div
            class="w-full py-10 lg:max-w-[1230px] px-4 mx-auto flex justify-start items-center text-sm text-white"
          >
            <div class="flex gap-8 w-full">
              <NuxtLink to="/" class="shrink-0">
                <img
                  src="/puretec-logo.avif"
                  width="200"
                  height="48"
                  alt="Puretec"
                  class="hidden lg:block shrink-0 aspect-auto w-[200px] h-[48px]"
                />
                <img
                  src="/puretec-logo.avif"
                  width="150"
                  height="36"
                  alt="Puretec"
                  class="block lg:hidden shrink-0 aspect-auto w-[150px] h-[36px]"
                />
              </NuxtLink>
              <nav class="grow w-full flex justify-start items-center">
                <ul class="w-full flex justify-between items-center">
                  <li class="flex items-end">
                    <button class="flex justify-start items-center gap-2">
                      <div>PRODUCTS</div>
                      <Icon name="mi:chevron-down" style="color: white" />
                    </button>
                  </li>
                  <li class="text-center">
                    <button>
                      <div class="text-white block">PRODUCT</div>
                      <div class="text-white block">SELECTOR</div>
                    </button>
                  </li>
                  <li class="flex items-end">
                    <div>
                      <div
                        class="flex justify-start items-center gap-2 text-center"
                        @mouseenter="removeClass('kh')"
                        @mouseleave="addClass('kh')"
                      >
                        <NuxtLink to="/">
                          <div class="text-white block">KNOWLEDGE</div>
                          <div class="text-white block">HUB</div>
                        </NuxtLink>
                        <Icon name="mi:chevron-down" style="color: white" />
                      </div>
                      <div class="hidden" id="kh-submenu">
                        <div class="absolute z-20 pt-4">
                          <div class="bg-white px-8 py-6 shadow-md">
                            <NuxtLink
                              v-for="(category, idx) in categories"
                              :key="idx"
                              to="/"
                              :class="'block py-2 text-xs lg:text-sm text-gray-700 hover:text-black'"
                            >
                              {{ category.title }}
                            </NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="flex items-end">
                    <button class="text-white hover:text-white">
                      WHERE TO BUY
                    </button>
                  </li>
                  <li class="flex items-end">
                    <button class="text-white hover:text-white">
                      <div>
                        <div class="text-white block">FIND AN</div>
                        <div class="text-white block">INSTALLER</div>
                      </div>
                    </button>
                  </li>
                  <li class="flex items-end">
                    <div>
                      <button class="flex justify-start items-center gap-2">
                        <div>
                          <div class="text-white block">COMPANY</div>
                          <div class="text-white block">& SUPPORT</div>
                        </div>
                      </button>
                    </div>
                  </li>
                  <li class="w-56">
                    <div class="relative">
                      <div class="relative">
                        <input
                          type="text"
                          placeholder="Search"
                          class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-none placeholder-gray-400 text-sm px-2.5 py-1.5 shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-500 ps-9"
                        />
                        <span
                          class="absolute inset-y-0 start-0 flex items-center pointer-events-none px-2.5"
                        >
                          <Icon
                            name="mi:search"
                            class="flex-shrink-0 text-gray-400 dark:text-gray-500 h-5 w-5"
                          />
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block lg:hidden h-[75px] bg-black">
      <div>
        <div class="bg-black block lg:hidden">
          <div class="w-full px-4 mx-auto flex justify-between text-white py-4">
            <button
              class="h-12 w-12 flex justify-start items-center"
              :onclick="toggleNav"
            >
              <Icon name="mi:menu" class="w-[32px] h-[32px]" />
            </button>

            <div class="flex justify-center items-center">
              <NuxtLink to="/" class="shrink-0">
                <img
                  src="/puretec-logo.avif"
                  width="200"
                  height="48"
                  alt="Puretec"
                  class="hidden lg:block shrink-0 aspect-auto w-[200px] h-[48px]"
                />
                <img
                  src="/puretec-logo.avif"
                  width="150"
                  height="36"
                  alt="Puretec"
                  class="block lg:hidden shrink-0 aspect-auto w-[150px] h-[36px]"
                />
              </NuxtLink>
            </div>

            <button class="h-12 w-12 flex justify-end items-center">
              <Icon name="mi:search" class="w-[24px] h-[24px]" />
            </button>
          </div>

          <div
            class="fixed inset-0 mt-[107px] z-40 overflow-hidden -translate-x-full flex flex-col justify-between"
            style="
              translate: none;
              rotate: none;
              scale: none;
              transform: translate(0px, 0px);
            "
            v-if="showNav"
          >
            <div class="grow bg-white overflow-hidden flex">
              <div class="absolute h-full w-full bg-white 0 text-sm">
                <div class="flex flex-col h-full w-full">
                  <div class="flex justify-end bg-gray-50">
                    <div class="flex justify-end items-center gap-4">
                      <button class="h-10 w-10">
                        <Icon
                          name="mi:close"
                          class="w-[24px] h-[24px]"
                          :onclick="toggleNav"
                        />
                      </button>
                    </div>
                  </div>

                  <div class="flex flex-col justify-between grow">
                    <div class="grow">
                      <button
                        class="h-10 flex justify-start items-center hover:cursor-pointer cursor-pointer w-full"
                      >
                        <div class="h-10 w-10 flex justify-center items-center">
                          <Icon
                            name="mi:chevron-right"
                            class="h-[15px] w-[15px] icon black"
                          />
                        </div>
                        <div class="font-normal text-sm uppercase">
                          PRODUCTS
                        </div>
                      </button>
                      <button
                        class="h-10 flex justify-start items-center hover:cursor-pointer cursor-pointer w-full"
                      >
                        <div class="h-10 w-10 flex justify-center items-center">
                          <Icon
                            name="mi:chevron-right"
                            class="h-[15px] w-[15px] icon black"
                          />
                        </div>
                        <div class="font-normal text-sm uppercase">
                          PRODUCTS SELECTOR
                        </div>
                      </button>
                      <button
                        class="h-10 flex justify-start items-center hover:cursor-pointer cursor-pointer w-full"
                      >
                        <div class="h-10 w-10 flex justify-center items-center">
                          <Icon
                            name="mi:chevron-right"
                            class="h-[15px] w-[15px] icon black"
                          />
                        </div>
                        <div class="font-normal text-sm uppercase">
                          KNOWLEDGE HUB
                        </div>
                      </button>
                      <button
                        class="h-10 flex justify-start items-center hover:cursor-pointer cursor-pointer w-full"
                      >
                        <div class="h-10 w-10 flex justify-center items-center">
                          <Icon
                            name="mi:chevron-right"
                            class="h-[15px] w-[15px] icon black"
                          />
                        </div>
                        <div class="font-normal text-sm uppercase">
                          WHERE TO BUY
                        </div>
                      </button>
                      <button
                        class="h-10 flex justify-start items-center hover:cursor-pointer cursor-pointer w-full"
                      >
                        <div class="h-10 w-10 flex justify-center items-center">
                          <Icon
                            name="mi:chevron-right"
                            class="h-[15px] w-[15px] icon black"
                          />
                        </div>
                        <div class="font-normal text-sm uppercase">
                          FIND AN INSTALLER
                        </div>
                      </button>
                      <button
                        class="h-10 flex justify-start items-center hover:cursor-pointer cursor-pointer w-full"
                      >
                        <div class="h-10 w-10 flex justify-center items-center">
                          <Icon
                            name="mi:chevron-right"
                            class="h-[15px] w-[15px] icon black"
                          />
                        </div>
                        <div class="font-normal text-sm uppercase">
                          COMPANY & SUPPORT
                        </div>
                      </button>
                      <button
                        class="h-10 flex justify-start items-center hover:cursor-pointer cursor-pointer w-full"
                      >
                        <div class="h-10 w-10 flex justify-center items-center">
                          <Icon
                            name="mi:chevron-right"
                            class="h-[15px] w-[15px] icon black"
                          />
                        </div>
                        <div class="font-normal text-sm uppercase">
                          WARRANTY REGISTRATION
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
