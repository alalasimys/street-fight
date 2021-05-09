import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over

    let firstFighterBlock = false;
    let secondFighterBlock = false;

    window.addEventListener('keydown', (event) => {
      switch (event.code) {
        case controls.PlayerOneBlock:
          firstFighterBlock = true;
          break;

        case controls.PlayerTwoBlock:
          secondFighterBlock = true;
          break;
      }
    });

    const keyListener = window.addEventListener('keyup', (event) => {
      switch (event.code) {
        case controls.PlayerOneAttack:
          if (firstFighterBlock) {
            return;
          }
          const damageSecondFighter = secondFighterBlock ? 0 : getDamage(firstFighter, secondFighter);
          const healthSecondFighter = reduceHealthIndicator('right', damageSecondFighter);

          if (!healthSecondFighter) {
            resolve(firstFighter);
            window.removeEventListener('keyup', keyListener);
          }
          break;

        case controls.PlayerTwoAttack:
          if (secondFighterBlock) {
            return;
          }
          const damageFirstFighter = firstFighterBlock ? 0 : getDamage(secondFighter, firstFighter);
          const healthFirstFighter = reduceHealthIndicator('left', damageFirstFighter);

          if (!healthFirstFighter) {
            resolve(secondFighter);
            window.removeEventListener('keyup', keyListener);
          }
          break;

        case controls.PlayerOneBlock:
          firstFighterBlock = false;
          break;

        case controls.PlayerTwoBlock:
          secondFighterBlock = false;
          break;

        // case controls.PlayerOneCriticalHitCombination:
        //   // !add debounce
        //   reduceHealthIndicator('right', CriticalHit(firstFighter));
        //   break;
      }
    });
  });
}

export function getDamage(attacker, defender) {
  let damage = getHitPower(attacker) - getBlockPower(defender);
  return damage;
  // return damage
}

export function getHitPower(fighter) {
  const criticalHitChance = Math.random() * 1 + 1;
  return fighter.attack * criticalHitChance;
  // return hit power
}

export function getBlockPower(fighter) {
  const dodgeChance = Math.random() * 1 + 1;
  const power = fighter.defense * dodgeChance;

  return power;
  // return block power
}

function reduceHealthIndicator(position, damage) {
  const el = document.querySelector(`#${position}-fighter-indicator`);
  const health = parseInt(el.style.width.replace('%', '') || 100);
  const restHealth = health - damage;
  const finalHealthIndicator = restHealth <= 0 ? 0 : restHealth;

  el.style.width = finalHealthIndicator + '%';

  return finalHealthIndicator;
}

function CriticalHit(fighter) {
  return 2 * fighter.attack;
}
