<template>
  <div id="app">
    <div id="nav">
      <div class="miheader">
        <div class="grupo1">
          <div class="logo">
            <img
              src="https://www.firstlegoleague.soy/wp-content/uploads/2019/11/logo-borde-3-1.png"
              class="attachment-full size-full"
              alt=""
              loading="lazy"
              srcset="
                https://www.firstlegoleague.soy/wp-content/uploads/2019/11/logo-borde-3-1.png        600w,
                https://www.firstlegoleague.soy/wp-content/uploads/2019/11/logo-borde-3-1-300x79.png 300w
              "
              width="220"
              height="158"
            />
          </div>
          <div class="espacio3" style="color: white">
            <font-awesome-icon style="margin-right: 5px" icon="envelope" />

            <a href="mailto:asociación@ingeniera.soy">
              FLLspain@ingeniera.soy
            </a>
          </div>
          <div class="espacio2" style="color: white">
            <font-awesome-icon style="margin-right: 5px" icon="phone-alt" />
            <a href="tel:+34"> 689 375 975 </a>
          </div>
        </div>
        <div class="grupo2">
          <div>
            <a class="raven-menu-item raven-link-item"
              ><img
                src="https://www.firstlegoleague.soy/wp-content/uploads/2021/09/perfil.png"
                width="20"
                height="20"
              />&nbsp;&nbsp;Acceder</a
            >
          </div>
          <div>
            <a class="espacio2 raven-menu-item raven-link-item">Registrarse</a>
          </div>
        </div>
        <div class="grupo3">
          <div>
            <a
              class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-pulse-shrink elementor-repeater-item-0ad21a3"
              href="https://www.facebook.com/FIRSTLEGOLeagueSpain/"
              target="_blank"
            >
              <font-awesome-icon
                :icon="{ prefix: 'fab', iconName: 'facebook' }"
              />
            </a>
          </div>
          <div class="espacio">
            <a
              class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-pulse-shrink elementor-repeater-item-180d4cf"
              href="https://twitter.com/FLL_Spain"
              target="_blank"
            >
              <font-awesome-icon
                :icon="{ prefix: 'fab', iconName: 'twitter' }"
              />
            </a>
          </div>
          <div class="espacio">
            <a
              class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-animation-pulse-shrink elementor-repeater-item-a160ecb"
              href="https://www.linkedin.com/in/ingeniera-soy/"
              target="_blank"
            >
              <font-awesome-icon
                :icon="{ prefix: 'fab', iconName: 'linkedin' }"
              />
            </a>
          </div>
          <div class="espacio">
            <a
              class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-pulse-shrink elementor-repeater-item-e8353b9"
              href="https://www.instagram.com/fll_spain/"
              target="_blank"
            >
              <font-awesome-icon
                :icon="{ prefix: 'fab', iconName: 'instagram' }"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <footer
      class="bg-dark text-center text-white mifooter"
      role="contentinfo"
      itemscope="itemscope"
      itemtype="http://schema.org/WPFooter"
    >
      <div class="col-md-auto">
        <div
          class="text-center p-3"
          style="color: white; background-color: #343a40"
        >
          ©2022 -FIRST LEGO League Spain.© Ingeniera soy. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.miheader {
  font-size: 17px;
  background-color: #7c2444;
  display: -webkit-inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -webkit-box-pack: center;
  -webkit-flex-pack: center;
  -webkit-justify-content: center;
  -webkit-flex-align: center;
  -webkit-align-items: center;
  vertical-align: top;
  width: 100%;
  justify-content: center;
  padding-top: 0%;
}
.miheader a,
.miheader a:hover {
  color: white;
  font-weight: bold;
}
.grupo1,
.grupo2,
.grupo3 {
  display: -webkit-inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -webkit-box-pack: center;
  -webkit-flex-pack: center;
  -webkit-justify-content: center;
  -webkit-flex-align: center;
  -webkit-align-items: center;
  vertical-align: top;
}
.grupo1 {
  padding-right: 5%;
}
.grupo3 {
  padding-left: 5%;
}
.espacio {
  padding-left: 15px;
}
.espacio2 {
  padding-left: 30px;
}
.espacio3 {
  padding-left: 70px;
}

.mifooter {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: #343a40;
  background-size: auto;
  background-size: auto;
  border-top-width: 1px;
  border-top-style: solid;
}
</style>
