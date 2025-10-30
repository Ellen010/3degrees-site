@import "tailwindcss";

@theme {
  --font-regular: "Regular";
  --font-medium: "Medium";
  --font-semibold: "SemiBold";
  --font-bold: "Bold";
  --color-primary: #841c21;
  --color-dark-100: #86868b;
  --color-dark-200: #2e2e30;
  --color-light-100: #adb5bd;
}

html {
  width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  width: 100vw;
  overflow-x: hidden;
  background-color: #fff7ed;
  color: var(--color-dark-100);
  font-family: var(--font-semibold);
  padding: 2em;
  text-align: center;
  margin: 0 auto;
}

@layer utilities {
  @utility flex-center {
    @apply flex items-center justify-center;
  }

  @utility flex-between {
    @apply flex items-center justify-between;
  }

  @utility col-center {
    @apply flex flex-col items-center justify-center;
  }

  @utility abs-center {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
  }

  @utility h3-semibold {

    @apply font-semibold text-xl text-dark-100;
  }

  @utility base-semibold {
    @apply font-semibold text-base text-dark-100;
  }

  @utility small-medium {
    @apply font-medium text-xs;
  }

  @utility section-heading {
    @apply text-red-800 font bold text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20;
    box-shadow: 5px 4px 10px darkred;
  }
}

@layer components {
  header {
    @apply w-screen fixed top-0 left-0 z-50 flex-center bg-orange-50 min-h-[7vh];

    nav {
      @apply container mx-auto px-5 2xl:px-0;

      img {
        @apply cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out;

        button {
          @apply bg-transparent border-none outline-none cursor-pointer;
        }

      ul {
        @apply flex-center gap-8;

        a {
          @apply hidden md:block text-red-950 opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out;
        }
      }
    }
  }

  @layer components {
    header {
      @apply w-screen fixed top-0 left-0 z-50 flex-center bg-orange-200 min-h-[7vh];

      nav {
        @apply container mx-auto flex-between px-5 2xl:px-0;

        img {
          @apply cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out;

          button {
            @apply bg-transparent border-none outline-none cursor-pointer;
          }
        }

        ul {
          @apply flex-center gap-8;

          a {
            @apply hidden md:block text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out;
          }
        }
      }

      .logo {
        @apply h-24 w-24 rounded-[25%] transition-all duration-300 ease-in-out m-4;
      }

      .logo:hover {
        @apply shadow-[0_0_30px_rgba(188,143,143,0.9)] scale-110;
      }

      .navBarList {
        @apply text-xl font-bold text-red-800;
      }

      .navBarIcon {
        @apply h-8 w-8;
      }
    }
      #hero {
      @apply h-fit lg:h-[80vh] col-center mt-40 lg:mt-20 2xl:mt-[7vh];

      div {
        @apply relative z-10 col-center lg:translate-y-16;

        h1 {
          @apply font-semibold lg:text-3xl 2xl:text-5xl text-white;
        }

        img {
          @apply container mx-auto w-2/3;
        }
      }

      video {
        @apply m-auto lg:translate-y-5 2xl:translate-y-0 w-3/4 md:w-2/3 lg:w-1/2;
      }

      button {
        @apply relative z-10 bg-primary text-white py-2 px-6 mt-10 lg:mt-10 mb-5 rounded-full font-semibold text-lg cursor-pointer hover:bg-[#a68844] hover:text-black transition-all duration-300 ease-in-out;
      }

      p {
        @apply lg:h3-semibold base-semibold;
      }
    }
  }
  #showcase {
    @apply relative lg:overflow-hidden my-20 max-h-3/4;

    .media {
      @apply relative lg:overflow-hidden my-20 max-h-3/4;

      video {
        @apply w-full object-cover object-center;
      }

      .mask {
        @apply absolute h-7/8 top-0 lg:-top-40 xl:top-0;

        img {
          @apply h-full scale-150 lg:scale-100;
          transform: matrix(80, 0, 0, 80, 0, 0);
        }
        @media (max-width: 1024px) {
          img {
            transform: matrix(1, 0, 0, 1, 0, 0);
          }
        }
      }
    }
    .link {
      @apply text-red-950 cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out;
    }
  }
  }
