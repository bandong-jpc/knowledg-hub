<script lang="ts">
export default {
  name: "TopNav",
  methods: {
    addClass: function (callerId: string) {
      if (callerId === "consumer-button") {
        const container = document.getElementById("consumer-submenu");
        container?.classList.add("hidden");
      }
    },
    removeClass: function (callerId: string) {
      if (callerId === "consumer-button") {
        const container = document.getElementById("consumer-submenu");
        container?.classList.remove("hidden");
      }
    },
  },
};
</script>
<template>
  <nav>
    <div class="w-full h-8 lg:h-9 bg-pink-500">
      <div
        class="w-full h-8 lg:h-9 lg:max-w-[1230px] px-4 mx-auto flex justify-between items-center text-xs lg:text-sm text-white"
      >
        <div class="flex justify-start gap-4">
          <!-- Consumer button -->
          <div>
            <button
              class="h-8 lg:h-9"
              @mouseenter="removeClass('consumer-button')"
              @mouseleave="addClass('consumer-button')"
              id="consumer-button"
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
                <!-- <button
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
                </button> -->
              </div>
            </div>
          </div>

          <!-- Location button -->
          <div>
            <button class="h-8 lg:h-9">
              <div class="flex justify-start items-center gap-2">
                <div>Australia</div>
                <Icon name="mi:chevron-down" style="color: white" />
              </div>
            </button>
            <div class="hidden" id="consumer-submenu">
              <div
                class="absolute z-40 bg-gray-800 !border-l !border-r !border-gray-700 shadow-md"
              >
                <!-- <button
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
                </button> -->
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
              >
                <!-- <button
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
                </button> -->
              </div>
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
                    <div class="flex justify-start items-center gap-2">
                      <NuxtLink to="/knowledge-hub">
                        <div class="text-white block">KNOWLEDGE</div>
                        <div class="text-white block">HUB</div>
                      </NuxtLink>
                      <Icon name="mi:chevron-down" style="color: white" />
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
                          class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-none placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 ps-9"
                        />
                        <span
                          class="absolute inset-y-0 start-0 flex items-center pointer-events-none px-2.5"
                        >
                          <Icon name="mi:search" style="color: white" />
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
  </nav>
</template>
