// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract StartMint is ERC1155('') {
    //initialisation du contract Counter
    using Counters for Counters.Counter;
    //initialisation de la variable _tokenIdCounter de type Counters
    Counters.Counter private _tokenIdCounter;

    constructor() {}

    //creation de la fonction de mint
    function mint(
        address account,
        uint256 amount,
        bytes memory data
    ) public {
        uint256 tokenId = _tokenIdCounter.current(); //recuperation du id actuel
        _tokenIdCounter.increment(); //incrementation +1 du current id
        _mint(account, tokenId, amount, data); //mint du token
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public {
        _mintBatch(to, ids, amounts, data);
    }

    //fonction de réecriture des url compatible opensea (A REVOIR)
    function uri(uint256 _tokenid)
        public
        pure
        override
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    'https://ipfs.io/ipfs/bafkreied6f6qeyp442urukawgcv7or4cnh7l42zwhqxtzuyo735hmdbkpu/',
                    Strings.toString(_tokenid),
                    '.json'
                )
            );
    }
}