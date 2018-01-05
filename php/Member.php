<?php
/**
 *
 */
class Member
{
  public $nama;
  public $warna;

  private $data = [
    '51015001' => ['nama'=>'agung ashari','warna'=>'ddeeff'],
    '51015002' => ['nama'=>'ahmad eril','warna'=>'ddffee'],
    '51015003' => ['nama' =>'aprianto','warna' =>'eeffdd'],
  ];

  function Member( $nim)
  {
  $this->nama =$this->data[$nim]['nama'];
  $this->warna =$this->data[$nim]['warna'];
  }
}
 ?>
