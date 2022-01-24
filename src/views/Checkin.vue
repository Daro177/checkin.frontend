<template>
  <div>
    <div class="checkin-header">
      <div class="header-logo1">
        <img
          src="https://www.firstlegoleague.soy/wp-content/uploads/2021/08/FLL-ico-V.png"
          class="attachment-full size-full"
          alt=""
          loading="lazy"
          srcset="
            https://www.firstlegoleague.soy/wp-content/uploads/2021/08/FLL-ico-V.png          1077w,
            https://www.firstlegoleague.soy/wp-content/uploads/2021/08/FLL-ico-V-249x300.png   249w,
            https://www.firstlegoleague.soy/wp-content/uploads/2021/08/FLL-ico-V-852x1024.png  852w,
            https://www.firstlegoleague.soy/wp-content/uploads/2021/08/FLL-ico-V-768x923.png   768w,
            https://www.firstlegoleague.soy/wp-content/uploads/2021/08/FLL-ico-V-600x721.png   600w
          "
          sizes="(max-width: 1077px) 100vw, 1077px"
          width="1077"
          height="1295"
        />
      </div>
      <div class="header-titulo">
        <h2 style="color: white !important" class="title">CHECK-IN</h2>
      </div>
      <div class="header-logo2">
        <img
          src="https://www.firstlegoleague.soy/wp-content/uploads/2021/08/Ingeniera-Soy-V2.png"
          class="attachment-full size-full"
          alt=""
          loading="lazy"
          srcset="
            https://www.firstlegoleague.soy/wp-content/uploads/2021/08/Ingeniera-Soy-V2.png          1077w,
            https://www.firstlegoleague.soy/wp-content/uploads/2021/08/Ingeniera-Soy-V2-249x300.png   249w,
            https://www.firstlegoleague.soy/wp-content/uploads/2021/08/Ingeniera-Soy-V2-852x1024.png  852w,
            https://www.firstlegoleague.soy/wp-content/uploads/2021/08/Ingeniera-Soy-V2-768x923.png   768w,
            https://www.firstlegoleague.soy/wp-content/uploads/2021/08/Ingeniera-Soy-V2-600x721.png   600w
          "
        />
      </div>
    </div>

    <div
      style="
        font-size: 2rem;
        font-weight: 500;
        word-break: break-word;
        padding-left: 5%;
        padding-top: 5%;
        padding-bottom: 5%;
      "
    >
      <div class="title is-3 text-justify">
        Por favor, introduzca su correo para acceder al proceso de
        confirmación<br />
        de asistencia (check-in) de los torneos de FIRST LEGO League
      </div>
      <b-field style="display: inline-flex; padding: 15px">
        <br />
        <b-input
          v-model="email"
          type="email"
          name="email"
          class="form-control"
          placeholder="email"
          required
          autofocus
        />
        <b-button @click="enviar()" outl class="btn btn-primary btn-block"
          >Enviar</b-button
        ><br />
      </b-field>
      <div style="color: red" class="subtitle is-7 text-justify">
        {{ this.resu }}
      </div>
      <div class="subtitle is-4 text-justify">
        Tenga en cuenta que el correo debe ser el mismo con el que se hizo la
        inscripción.
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router/index.js";
export default {
  name: "Checkin",
  data: function () {
    return {
      email: "",
      errors: "",
      resu: "",
    };
  },
  props: {
    msg: String,
  },

  methods: {
    closeIndefinite() {
      if (this.indefinteToast) {
        this.indefinteToast.close();
        this.indefinteToast = null;
      }
    },

    async enviar() {
      console.log("ENVIANDO...", this.email);
      var that = this;
      setTimeout(function () {
        that.resu =
          "*Correo no encontrado. Revise si es correcto, inténtelo de nuevo más tarde o póngase en contacto con FLLSpain@ingeniera.soy";
      }, 3 * 1000);
      await axios
        .get("http://127.0.0.1:8000/send-email/?email=" + this.email)
        .then((res) => {
          console.log("RES", res);
          router.push({ name: "Success" });
          if (res.statusText == "OK") {
            this.$buefy.toast.open({
              message: "Correo enviado!",
              type: "is-success",
            });
          } else if (this.error) {
            this.$buefy.toast.open({
              message: `Se ha producido un error`,
              type: "is-danger",
            });
          }
          return res.data;
        })
        .catch(function (error) {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          return Promise.reject(error);
        });
      this.resu = "";
      console.log("exito");
    },
    errorEmail() {
      console.log("Error email");
      this.$buefy.toast.open({
        message: `No hemos encontrado su email`,
        type: "is-danger",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.checkin-header {
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
  background-color: #0066b3;
  width: 100%;
}

.header-logo1 {
  margin-right: 20%;
}
.header-logo2 {
  margin-left: 20%;
}

.checkin-header img {
  width: 150px;
}
</style>
