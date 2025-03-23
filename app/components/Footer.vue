<script setup lang="ts"></script>
<template>
  <footer>
    <div class="bg-black tw-hidden lg:block">
      <div
        class="w-full pt-10 pb-4 lg:max-w-[1230px] px-4 mx-auto flex justify-start items-center text-sm text-white"
      >
        <div class="flex gap-20 w-full">
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

          <nav class="w-full flex justify-end items-start">
            <ul class="flex gap-14 justify-between">
              <li class="flex items-end">COMPANY</li>
              <li class="flex items-end">1300 140 140</li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="w-full mx-auto lg:max-w-[1230px] px-4">
        <hr class="h-px bg-gray-700 border-0 dark:bg-gray-800" />
      </div>
    </div>
    <div class="bg-black lg:pb-12">
      <div class="lg:flex lg:justify-between lg:w-[1230px] lg:mx-auto lg:px-4">
        <div class="lg:grow">
          <div
            class="bg-black text-white text-center text-sm py-10 lg:py-4 flex flex-col lg:flex-row gap-4"
          >
            <div>© 2025 Copyright Puretec Pty Ltd</div>
            <div class="flex justify-center gap-4">
              <p class="text-gray-300 underline">Privacy Policy</p>
              <p class="text-gray-300 underline">Terms & Conditions</p>
            </div>
          </div>
        </div>

        <div
          class="bg-gray-800 lg:bg-black h-full text-white text-center text-sm pt-10 pb-20 lg:py-4 flex justify-center flex-col gap-4"
        >
          <div class="lg:hidden">Connect with Puretec</div>
          <div>
            <div class="flex justify-center items-center gap-4 text-white">
              <a target="_blank" href="https://www.facebook.com/puretecgroup/">
                <Icon
                  name="tabler:brand-facebook-filled"
                  style="color: white"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/puretec_group/"
              >
                <Icon name="tabler:brand-instagram" style="color: white" />
              </a>
              <a
                target="_blank"
                href="https://www.pinterest.com.au/Puretec_Group/"
              >
                <Icon
                  name="tabler:brand-pinterest-filled"
                  style="color: white"
                />
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
                <Icon
                  name="tabler:brand-linkedin-filled"
                  style="color: white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
