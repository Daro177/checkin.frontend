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
      <div>
        <h2 style="color: white !important" class="title">
          CONFIRMACIÓN DE ASISTENCIA A TORNEOS
        </h2>
        <div style="color: white !important" class="subtitle is-4">
          Por favor, realice su "check-in"
        </div>
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
    <!-- DATOS -->
    <div class="datos" style="margin-top: 15px">
      <div class="subtitle is-4">
        <u>Datos de Inscripción</u>
      </div>
      <div style="display: inline-flex">
        <div style="text-align: left">
          <div><b>Colegio:</b> {{ school }}</div>
          <div><b>Dirección:</b> {{ address }}</div>
          <div><b>Codigo Postal:</b> {{ cp }}</div>
          <div><b>Correo:</b> {{ email }}</div>
        </div>
        <div style="text-align: right; margin-left: 35px">
          <div v-if="this.challenge.length > 0">
            <b>Nº Equipos Challenge:</b> {{ this.challenge.length }}
          </div>
          <div v-if="this.explore.length > 0">
            <b>Nº Equipos Explore:</b> {{ this.explore.length }}
          </div>
          <div v-if="this.discover.length > 0">
            <b>Nº Equipos Discover:</b> {{ this.discover.length }}
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="subtitle is-3" style="margin-bottom: 6px">
      <u>Realice su Inscripción<sup style="color: red">*</sup></u>
    </div>
    <div class="subtitle is-6">
      <b style="color: red">*</b>
      Por favor, rellene y confirme los datos de cada inscripción.
    </div>
    <div class="subtitle is-5">
      <b>Sede FLL Asignada:</b> <u>{{ campus }}</u>
    </div>

    <!--  Bucle For... -->
    <!-- CHALLENGE -->
    <div v-for="(inscription, index) in this.inscriptions" :key="index">
      <div v-if="inscription.category == 'CHALLENGE'" class="challenge">
        <div>
          <img
            src="https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Challenge-horiz-full-color-scaled.jpg"
            class="attachment-full size-full"
            alt=""
            loading="lazy"
            srcset="
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Challenge-horiz-full-color-scaled.jpg   2560w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Challenge-horiz-full-color-300x67.jpg    300w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Challenge-horiz-full-color-1024x229.jpg 1024w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Challenge-horiz-full-color-768x172.jpg   768w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Challenge-horiz-full-color-1536x344.jpg 1536w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Challenge-horiz-full-color-2048x459.jpg 2048w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Challenge-horiz-full-color-600x134.jpg   600w
            "
            sizes="(max-width: 2560px) 100vw, 2560px"
            width="400px"
          />
          <hr />
        </div>
        <div style="display: inline-flex">
          <div style="margin-right: 5%">
            <div>
              <b-field required label="Número Pedido">
                <b-input
                  v-model="inscription.num_order"
                  name="team"
                  class="form-control"
                  placeholder="número pedido"
                  disabled
                  required
                />
              </b-field>
            </div>
            <div>
              <b-field required style="margin-top: 15px" label="Teléfono">
                <b-input
                  v-model="inscription.phone"
                  name="phone"
                  class="form-control"
                  placeholder="teléfono"
                  required
                />
              </b-field>
            </div>
            <b-field style="margin-top: 15px" required label="Nombre Equipo">
              <b-input
                v-model="inscription.team_name"
                name="team"
                class="form-control"
                placeholder="nombre equipo"
                required
              />
            </b-field>
            <div></div>
            <b-field
              style="margin-top: 15px"
              label="Confirmo participación"
              required
            >
              <b-checkbox
                class="check-challenge"
                v-model="inscription.checkin"
              />
            </b-field>
          </div>
          <div>
            <b-field required label="Categoria">
              <b-input
                v-model="inscription.category"
                name="category"
                class="form-control"
                placeholder="categoría"
                disabled
              />
            </b-field>
            <b-field required label="Entrenador">
              <b-input
                v-model="inscription.trainer_name"
                name="trainer"
                class="form-control"
                placeholder="entrenador"
                required
              />
            </b-field>

            <b-field
              required
              style="margin-top: 15px"
              label="Número de Asistentes"
            >
              <b-input
                v-model="inscription.num_matches"
                type="number"
                name="match"
                class="form-control"
                placeholder="match"
                :min="2"
                :max="10"
                required
              />
            </b-field>
            <div style="margin-top: 30px">
              <b-button
                class="boton-challenge"
                @click="send_inscripcion(inscription)"
                >Confirmar</b-button
              >
            </div>
          </div>
        </div>
        <div style="padding-top: 5%">
          <b>*Recuerde que debe darle click al botón de confirmar*</b>
        </div>
      </div>
      <!-- EXPLORE -->
      <div v-if="inscription.category == 'EXPLORE'" class="explore">
        <div>
          <img
            src="https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Explore-horiz-full-color.jpg"
            class="attachment-full size-full"
            alt=""
            loading="lazy"
            srcset="
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Explore-horiz-full-color.jpg          2357w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Explore-horiz-full-color-300x74.jpg    300w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Explore-horiz-full-color-1024x252.jpg 1024w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Explore-horiz-full-color-768x189.jpg   768w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Explore-horiz-full-color-1536x379.jpg 1536w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Explore-horiz-full-color-2048x505.jpg 2048w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Explore-horiz-full-color-600x148.jpg   600w
            "
            sizes="(max-width: 2357px) 100vw, 2357px"
            width="400"
          />
        </div>
        <hr />
        <div style="display: inline-flex">
          <div style="margin-right: 5%">
            <div>
              <b-field required label="Número Pedido">
                <b-input
                  v-model="inscription.num_order"
                  name="team"
                  class="form-control"
                  placeholder="número pedido"
                  disabled
                  required
                />
              </b-field>
            </div>
            <div>
              <b-field required style="margin-top: 15px" label="Teléfono">
                <b-input
                  v-model="inscription.phone"
                  name="phone"
                  class="form-control"
                  placeholder="teléfono"
                  required
                />
              </b-field>
            </div>
            <b-field style="margin-top: 15px" required label="Nombre Equipo">
              <b-input
                v-model="inscription.team_name"
                name="team"
                class="form-control"
                placeholder="nombre equipo"
                required
              />
            </b-field>
            <div></div>
            <b-field
              style="margin-top: 15px"
              label="Confirmo participación"
              required
            >
              <b-checkbox class="check-explore" v-model="inscription.checkin" />
            </b-field>
          </div>
          <div>
            <b-field required label="Categoria">
              <b-input
                v-model="inscription.category"
                name="category"
                class="form-control"
                placeholder="categoría"
                disabled
              />
            </b-field>
            <b-field required label="Entrenador">
              <b-input
                v-model="inscription.trainer_name"
                name="trainer"
                class="form-control"
                placeholder="entrenador"
                required
              />
            </b-field>

            <b-field
              required
              style="margin-top: 15px"
              label="Número de Asistentes"
            >
              <b-input
                v-model="inscription.num_matches"
                type="number"
                name="match"
                class="form-control"
                placeholder="match"
                :min="2"
                :max="6"
                required
              />
            </b-field>
            <div style="margin-top: 30px">
              <b-button
                class="boton-explore"
                @click="send_inscripcion(inscription)"
                >Confirmar</b-button
              >
            </div>
          </div>
        </div>
        <div style="padding-top: 5%">
          <b>*Recuerde que debe darle click al botón de confirmar*</b>
        </div>
      </div>
      <!-- DISCOVER -->
      <div v-if="inscription.category == 'DISCOVER'" class="discover">
        <div>
          <img
            src="https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Discover-horiz-full-color.png"
            class="attachment-full size-full"
            alt=""
            loading="lazy"
            srcset="
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Discover-horiz-full-color.png          5007w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Discover-horiz-full-color-300x70.png    300w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Discover-horiz-full-color-1024x238.png 1024w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Discover-horiz-full-color-768x178.png   768w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Discover-horiz-full-color-1536x356.png 1536w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Discover-horiz-full-color-2048x475.png 2048w,
              https://www.firstlegoleague.soy/wp-content/uploads/2021/07/FLL-RGB_Discover-horiz-full-color-600x139.png   600w
            "
            sizes="(max-width: 5007px) 100vw, 5007px"
            width="400"
          />
        </div>
        <hr />
        <div style="display: inline-flex">
          <div style="margin-right: 5%">
            <div>
              <b-field required label="Número Pedido">
                <b-input
                  v-model="inscription.num_order"
                  name="team"
                  class="form-control"
                  placeholder="número pedido"
                  disabled
                  required
                />
              </b-field>
            </div>
            <div>
              <b-field required style="margin-top: 15px" label="Teléfono">
                <b-input
                  v-model="inscription.phone"
                  name="phone"
                  class="form-control"
                  placeholder="teléfono"
                  required
                />
              </b-field>
            </div>
            <b-field style="margin-top: 15px" required label="Nombre Equipo">
              <b-input
                v-model="inscription.team_name"
                name="team"
                class="form-control"
                placeholder="nombre equipo"
                required
              />
            </b-field>
            <div></div>
            <b-field
              style="margin-top: 15px"
              label="Confirmo participación"
              required
            >
              <b-checkbox
                class="check-discover"
                v-model="inscription.checkin"
              />
            </b-field>
          </div>
          <div>
            <b-field required label="Categoria">
              <b-input
                v-model="inscription.category"
                name="category"
                class="form-control"
                placeholder="categoría"
                disabled
              />
            </b-field>
            <b-field required label="Entrenador">
              <b-input
                v-model="inscription.trainer_name"
                name="trainer"
                class="form-control"
                placeholder="entrenador"
                required
              />
            </b-field>

            <b-field
              required
              style="margin-top: 15px"
              label="Número de Asistentes"
            >
              <b-input
                v-model="inscription.num_matches"
                type="number"
                name="match"
                class="form-control"
                placeholder="match"
                :min="2"
                :max="4"
                required
              />
            </b-field>
            <div style="margin-top: 30px">
              <b-button
                class="boton-discover"
                @click="send_inscripcion(inscription)"
                >Confirmar</b-button
              >
            </div>
          </div>
        </div>
        <div style="padding-top: 5%">
          <b>*Recuerde que debe darle click al botón de confirmar*</b>
        </div>
      </div>
      <hr />
    </div>
    <div class="datos" style="margin-top: 15px">
      <div>
        <b-field
          style="margin-top: 15px"
          label="Acepto los Términos y Condiciones"
          required
        >
          <b-checkbox class="check-data" v-model="terminos1" />
        </b-field>
      </div>
      <div>
        <b-field style="margin-top: 15px" label="Autorización de .." required>
          <b-checkbox class="check-data" v-model="terminos2" />
        </b-field>
      </div>
      <div style="display: flex; justify-content: center">
        <h2>
          Recuerde que para poder asistir al evento es imprescindible
          <br />presentar los documentos de autorización al socio local
          (Universiad, etc.)
        </h2>
        <br />
      </div>
    </div>
    <hr style="border: solid 3px #0066b3" />
    <div style="margin-top: 5px; margin-bottom: 20px">
      <b-button @click="checkin" class="boton-checkin title is-5" focused
        ><div><b>FINALIZAR CHECK-IN</b></div></b-button
      >
    </div>
    <div style="margin-bottom: 20px">
      Si los datos no son correctos o desea realizar algún comentario, envienos
      un correo a:
      <a href="mailto:asociación@ingeniera.soy"> FLLspain@ingeniera.soy </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router/index.js";

export default {
  name: "Inscriptions",
  data: function () {
    return {
      inscriptions: {},
      change: true,
      school: "",
      cp: 0,
      address: "",
      campus: "",
      challenge: {},
      explore: {},
      discover: {},
      terminos1: false,
      terminos2: false,
      // pdf: { url: "", label: "terminos" },
    };
  },
  mounted() {
    this.uid = this.$route.query.uid;
    this.email = this.$route.query.email;
    //Get Colegio
    axios.get("http://127.0.0.1:8000/schools/" + this.uid + "/").then((res) => {
      console.log(res);
      this.school_id = res.data.id;
      this.school = res.data.name;
      this.address = res.data.address;
      this.cp = res.data.zip;
      this.province = res.data.province;
      this.campus = res.data.ffl_campus;
      this.comments = res.data.comments;
    });
    //Get Inscripciones
    axios
      .get("http://127.0.0.1:8000/" + this.uid + "/inscriptions/")
      .then((res) => {
        console.log(res);
        this.inscriptions = res.data;
        this.challenge = this.inscriptions.filter((obj) => {
          console.log("asdf", obj);
          return obj.category == "CHALLENGE";
        });
        this.explore = this.inscriptions.filter((obj) => {
          console.log("asdf", obj);
          return obj.category == "EXPLORE";
        });
        this.discover = this.inscriptions.filter((obj) => {
          console.log("asdf", obj);
          return obj.category == "DISCOVER";
        });
      });
  },
  methods: {
    // downloadItem({ url, label }) {
    //   axios
    //     .get(url, { responseType: "blob" })
    //     .then((response) => {
    //       const blob = new Blob([response.data], { type: "application/pdf" });
    //       const link = document.createElement("a");
    //       link.href = URL.createObjectURL(blob);
    //       link.download = label;
    //       link.click();
    //       URL.revokeObjectURL(link.href);
    //     })
    //     .catch(console.error);
    // },
    confirm() {
      this.$buefy.dialog.alert({
        title: "Confirme sus participaciones",
        message: this.category,
        confirmText: "Sí",
        cancelText: "No",
        type: "is-danger",
        hasIcon: true,
        onConfirm: this.send(),
      });
    },
    send_colegio() {
      console.log("Enviando..");
      if (this.isDataValid) {
        axios
          .patch("http://127.0.0.1:8000/schools/" + this.uid + "/", {
            name: this.school,
            address: this.address,
            zip: this.cp,
            province: this.province,
            ffl_campus: this.campus,
          })
          .then((res) => {
            console.log(res);
            if (res.statusText == "OK") {
              this.$buefy.toast.open({
                message: "Se guardaron los datos!",
                type: "is-success",
              });
            } else if (res.statusText != "OK") {
              this.$buefy.toast.open({
                message: `Se ha producido un error`,
                type: "is-danger",
              });
            }
          });
      } else {
        this.$buefy.toast.open({
          message: `Se ha producido un error`,
          type: "is-danger",
        });
      }
    },

    send_inscripcion(inscription) {
      if (this.isInscriptionValid(inscription)) {
        axios
          .patch(
            "http://127.0.0.1:8000/" +
              this.uid +
              "/inscriptions/" +
              inscription.id +
              "/",
            {
              trainer_name: inscription.trainer_name,
              team_name: inscription.team_name,
              category: inscription.category,
              num_matches: inscription.num_matches,
              checkin: inscription.checkin,
            }
          )
          .then((res) => {
            console.log(res);
            if (res.statusText == "OK") {
              this.$buefy.toast.open({
                message: "Se guardaron los datos!",
                type: "is-success",
              });
            } else if (res.statusText != "OK") {
              this.$buefy.toast.open({
                message: `Se ha producido un error`,
                type: "is-danger",
              });
            }
          });
      } else {
        this.$buefy.toast.open({
          message: `Se ha producido un error`,
          type: "is-danger",
        });
      }
    },
    validateAsistents(num_asistents, category) {
      if (category == "CHALLENGE") {
        if (
          num_asistents != null &&
          num_asistents >= 2 &&
          num_asistents <= 10
        ) {
          this.errorAsistents = false;
        } else {
          this.errorAsistents = true;
        }
      } else if (category == "EXPLORE") {
        if (num_asistents != null && num_asistents >= 2 && num_asistents <= 6) {
          this.errorAsistents = false;
        } else {
          this.errorAsistents = true;
        }
      } else if (category == "DISCOVER") {
        if (num_asistents != null && num_asistents >= 2 && num_asistents <= 4) {
          this.errorAsistents = false;
        } else {
          this.errorAsistents = true;
        }
      }
    },
    validateTeamName(team_name) {
      if (team_name != null && team_name != "" && team_name != "-") {
        this.errorTeam = false;
      } else {
        this.errorTeam = true;
      }
    },
    validateTrainer(trainer) {
      if (trainer != null && trainer != "") {
        this.errorTrainer = false;
      } else {
        this.errorTrainer = true;
      }
    },
    validatePhone(phone) {
      if (phone != null && phone != "") {
        this.errorPhone = false;
      } else {
        this.errorPhone = true;
      }
    },
    validateCheck(check) {
      if (check != null) {
        this.errorCheck = false;
      } else {
        this.errorCheck = true;
      }
    },
    isInscriptionValid(inscription) {
      this.validateAsistents(inscription.num_matches, inscription.category);
      this.validateTeamName(inscription.team_name);
      this.validateTrainer(inscription.trainer_name);
      this.validatePhone(inscription.phone);
      this.validateCheck(inscription.checkin);

      return [
        !this.errorAsistents,
        !this.errorTeam,
        !this.errorTrainer,
        !this.errorPhone,
        !this.errorCheck,
        // !this.formConfiguration.birthCountryError,
      ].every(Boolean);
    },

    isCheckinValid() {
      //this.validateIBAN(this.data.iban);
      // this.validateCountry();

      return [
        // this.validateRequiredInputsByRefs(2),
        // !this.formConfiguration.birthCountryError,
      ].every(Boolean);
    },
    checkin() {
      console.log("ENVIANDO...", this.email);
      console.log("RES", this.terminos1);
      console.log("RES", this.terminos2);
      if (this.terminos1 === true && this.terminos2 === true) {
        axios
          .get(
            "http://127.0.0.1:8000/checkin/?uid=" +
              this.uid +
              "&school_id=" +
              this.school_id
          )
          .then((res) => {
            console.log("RES", res);
            router.push({ name: "FinishCheckin" });
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
            return error;
          });
      } else {
        this.$buefy.toast.open({
          message: `Debe aceptar los términos`,
          type: "is-danger",
        });
      }
    },
  },
};
</script>

<style>
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
  justify-content: center;
}
.comentarios {
  display: -webkit-inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -webkit-box-pack: center;
  -webkit-flex-pack: center;
  -webkit-justify-content: center;
  -webkit-flex-align: center;
  -webkit-align-items: center;
  vertical-align: center;
  width: 100%;
  justify-content: center;
}
.checkin-header img {
  width: 150px;
}
.challenge {
  border: 5px solid #ee1c25;
  border-radius: 25px;
  padding: 2%;
  display: inline-block;
}
.boton-challenge,
.boton-challenge:hover {
  border-color: #ee1c25;
}
.boton-explore,
.boton-explore:hover {
  border-color: #00a650;
}
.boton-discover,
.boton-discover:hover {
  border-color: #662e93;
}

.check-challenge.checkbox input[type="checkbox"]:checked + .check {
  background: #ee1c25
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat center center !important;
  border-color: #ee1c25 !important;
}
.check-challenge.checkbox:hover input[type="checkbox"]:not(:disabled) + .check {
  border-color: #ee1c25 !important;
}
.check-explore.checkbox input[type="checkbox"]:checked + .check {
  background: #00a650
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat center center !important;
  border-color: #00a650 !important;
}
.check-explore.checkbox:hover input[type="checkbox"]:not(:disabled) + .check {
  border-color: #00a650 !important;
}
.check-discover.checkbox input[type="checkbox"]:checked + .check {
  background: #662e93
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat center center !important;
  border-color: #662e93 !important;
}
.check-discover.checkbox:hover input[type="checkbox"]:not(:disabled) + .check {
  border-color: #662e93 !important;
}
.check-data.checkbox input[type="checkbox"]:checked + .check {
  background: #0066b3
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat center center !important;
  border-color: #0066b3 !important;
}
.check-data.checkbox:hover input[type="checkbox"]:not(:disabled) + .check {
  border-color: #0066b3 !important;
}
.explore {
  border: 5px solid #00a650;
  border-radius: 25px;
  padding: 2%;
  display: inline-block;
}
.discover {
  border: 5px solid #662e93;
  border-radius: 25px;
  padding: 2%;
  display: inline-block;
}
.datos {
  border: 5px solid #0066b3;
  border-radius: 25px;
  padding: 2%;
  display: inline-block;
}
.header-logo1 {
  margin-right: 10%;
}
.header-logo2 {
  margin-left: 10%;
}
.boton-checkin {
  background-color: #0066b3;
  color: white !important;
}
.boton-checkin.is-focused,
.boton-checkin:focus {
  border-color: #0066b3 !important;
}
</style>
