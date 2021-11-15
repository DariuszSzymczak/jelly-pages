import { onMounted } from "vue";


export default (component, positions, delay) => {
  onMounted(() => {
    if (document.getElementById(component)) {
      document.getElementById(component).style.transition = ` ${delay}s `;
      document.getElementById(component).style.transitionProperty = `top, left, right, bottom `;
  
      let transform = 1;
      positions.forEach((el, key) => {
        setTimeout(() => {
          document.getElementById(component).style.left = el.x;
          document.getElementById(component).style.top = el.y;
  
          if (el.reverse){
              transform = transform * -1;
              document.getElementById(component).style.transform = `scaleX(${transform})`;
          } 
          }, 1000 * key * delay );
      });
    }
  });
};
