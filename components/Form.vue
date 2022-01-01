<template>
  <div class="flex justify-center bg-yellow-500">
    <div class="bg-red-500 basis-1/2">
      <div class="text-gray-900">
        <div class="py-5">
          <h2 class="text-2xl font-bold">Solid</h2>
          <div class="mt-8 max-w-md">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input
                  type="text"
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input
                  type="email"
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">When is your event?</span>
                <input
                  type="date"
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select
                  class="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                >
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
              <label class="block">
                <span class="text-gray-700">Additional details</span>
                <textarea
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  rows="3"
                ></textarea>
              </label>
              <div class="block">
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                      />
                      <span class="ml-2">Email me news and special offers</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-yellow-100 w-full">
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-start-2 row-span-2 ...">01</div>
        <div class="row-end-3 row-span-2 ...">02</div>
        <div class="row-start-1 row-end-4 ...">03</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>