<template>
  <Layout>
    <h1 class="text-4xl font-bold">Style Guide</h1>
    <div class="sg-colors py-8">
      <h1 class="text-center text-3xl font-bold mb-8">
        <span class="pb-3 border-b-4 border-red">
          Colors
        </span>
      </h1>
      <div class="swatches grid grid-cols-3 gap-4">
        <div class="swatch-container">
          <div
            class="mx-auto my-2 rounded-full w-16 h-16 bg-white border border-red"
          ></div>
          <div class="text-center">#fcf7ff</div>
          <div class="text-center">White</div>
        </div>
        <div class="swatch-container">
          <div
            class="mx-auto my-2 rounded-full w-16 h-16 bg-grey-100 border border-blue"
          ></div>
          <div class="text-center">#f2edf5</div>
          <div class="text-center">Grey 100</div>
        </div>
        <div class="swatch-container">
          <div
            class="mx-auto my-2 rounded-full w-16 h-16 bg-grey-200 border border-blue"
          ></div>
          <div class="text-center">#dbd7de</div>
          <div class="text-center">Grey 200</div>
        </div>
        <div class="swatch-container">
          <div
            class="mx-auto my-2 rounded-full w-16 h-16 bg-grey-300 border border-blue"
          ></div>
          <div class="text-center">#6e7a87</div>
          <div class="text-center">Grey 300</div>
        </div>
        <div class="swatch-container">
          <div
            class="mx-auto my-2 rounded-full w-16 h-16 bg-grey-400 border border-blue"
          ></div>
          <div class="text-center">#343a40</div>
          <div class="text-center">Grey 400</div>
        </div>
        <div class="swatch-container">
          <div
            class="mx-auto my-2 rounded-full w-16 h-16 bg-red border border-blue"
          ></div>
          <div class="text-center">#ff715b</div>
          <div class="text-center">Red</div>
        </div>
        <div class="swatch-container">
          <div
            class="mx-auto my-2 rounded-full w-16 h-16 bg-blue border border-white"
          ></div>
          <div class="text-center">#0b1930</div>
          <div class="text-center">Blue Default</div>
        </div>
        <div class="swatch-container">
          <div
            class="mx-auto my-2 rounded-full w-16 h-16 bg-blue-lighter border border-white"
          ></div>
          <div class="text-center">#2541b2</div>
          <div class="text-center">Blue Lighter</div>
        </div>
        <div class="swatch-container">
          <div
            class="mx-auto my-2 rounded-full w-16 h-16 bg-blue-lightest border border-white"
          ></div>
          <div class="text-center">#d8e4fd</div>
          <div class="text-center">Blue Lightest</div>
        </div>
      </div>
    </div>
    <div class="sg-typography py-8">
      <h1 class="text-center text-3xl font-bold">
        <span class=" pb-3 border-b-4 border-red">
          Typography
        </span>
      </h1>
      <div class="post-content">
        <h2>Post Content Heading 2</h2>
        <h3>Post Content Heading 3</h3>
        <h4>Post Content Heading 4</h4>
        <h5>Post Content Heading 5</h5>
        <h6>Post Content Heading 6</h6>
      </div>
    </div>
  </Layout>
</template>
